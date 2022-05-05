from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from v1.helper import Helper
from v1.model.steps_model import Steps
from v1.serializer.steps_serializer import StepSerializer

class StepDoneView(APIView):
    
    def post(self, request, *args, **kwargs):
        auth_status = Helper(request).is_autheticated()
        if(auth_status['status']):
            data=request.data
            Steps.objects.filter(id = data['id']).update(completed = data['completed'])
            return Response({'status': True,'message':"Step saved successfully"}, status=status.HTTP_200_OK)
            
        else:
            return Response({'status': False,'message':"Unathorised"}, status=status.HTTP_200_OK)
        