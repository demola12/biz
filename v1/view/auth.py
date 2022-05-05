
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..helper import Helper
from ..serializer.user_serializer import UserSerializer
from ..model.user_model import User
from ..seed.process import ProcessSeed

class RegisterView(APIView):
    def post(self, request, *args, **kwargs):
        serializers = UserSerializer(data=request.data)
        if serializers.is_valid():
            serializers.validated_data["code"] =1234
            serializers.save() 
            token = Helper(request).get_token(serializers.data["id"], serializers.data["name"])
            ProcessSeed(serializers.data["id"]).seed()
            return Response({
                'status': True,
                'message':"User created successfully",
                'token':token,
                'data':serializers.data
                }, status=status.HTTP_201_CREATED)
            
        else:
            return Response({'status': False,'message':serializers.errors}, status=status.HTTP_200_OK)
        
        #
        
class GetUserDetails(APIView):
    def get(self, request):
        auth_status = Helper(request).is_autheticated()
        if(auth_status['status']):
            user = User.objects.filter(id=auth_status['payload']['id']).first()
            serializers = UserSerializer(user)
            return Response({'status': True,'message':"User Feteched Successfully",'data':serializers.data}, status=status.HTTP_200_OK)
        else:
            return Response({'status': False,'message':"Unathorised"}, status=status.HTTP_200_OK)



class LoginView(APIView):
    
    def post(self, request, *args, **kwargs):

        email = request.data['email']
        password = request.data['password']
        user = User.objects.filter(email=email).first()

        if user is None:
            return Response({'status': False,'message':'User not Found'}, status=status.HTTP_200_OK)
        #print(user.phone_verified)
        if not user.check_password(password):
            return Response({'status': False,'message':'Incorrect Password'}, status=status.HTTP_200_OK)
       
        token = Helper(request).get_token(user.id, user.name)
        serializers = UserSerializer(user)
        return Response({
            'status': True,
            'message':'success',
            'token':token,
            'data':serializers.data
        })

class ExampleView(APIView):
    
    def get(self, request):
        data=ProcessSeed(1).seed()
        return Response({'status': True,'message':"User Feteched Successfully",'data':data}, status=status.HTTP_200_OK)
        