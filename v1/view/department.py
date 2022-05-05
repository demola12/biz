from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from v1.helper import Helper
from v1.model.department_model import Department
from v1.model.user_model import User
from v1.serializer.department_serializer import DepartmentSerializer

class DepartmentView(APIView):
    
    def get(self, request):
        auth_status = Helper(request).is_autheticated()
        if(auth_status['status']):
            
            department = Department.objects.filter(userid=auth_status['payload']['id'])
            serializers = DepartmentSerializer(department,many=True)
            return Response({'status': True,'message':"User Feteched Successfully",'data':serializers.data}, status=status.HTTP_200_OK)
        else:
            return Response({'status': False,'message':"Unathorised"}, status=status.HTTP_401_UNAUTHORIZED)
    
    def post(self, request, *args, **kwargs):
        auth_status = Helper(request).is_autheticated()
        if(auth_status['status']):
            userid=User.objects.filter(id=auth_status['payload']['id']).first()
            data=request.data
            department= Department(userid=userid,name=data['name'],description='')
            department.save()
            return Response({'status': True,'message':"Category added Successfully"}, status=status.HTTP_200_OK)
        else:
            return Response({'status': False,'message':"Unathorised"}, status=status.HTTP_200_OK)
        