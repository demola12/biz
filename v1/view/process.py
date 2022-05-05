from unicodedata import name
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from v1.helper import Helper
from v1.model.department_model import Department
from v1.model.process_model import Process
from v1.model.steps_model import Steps
from v1.serializer.process_serializer import ProcessSerializer

class ProcessPositionUpdateView(APIView):
    
    def post(self, request, *args, **kwargs):
        auth_status = Helper(request).is_autheticated()
        if(auth_status['status']):
            data=request.data
            for i in range(0,len(data)):
                Process.objects.filter(id = data[i]['id']).update(position = (i+1))
            return Response({'status': True,'message':"Step saved successfully"}, status=status.HTTP_200_OK)
            
        else:
            return Response({'status': False,'message':"Unathorised"}, status=status.HTTP_200_OK)

class SaveProcessView(APIView):
    
    def post(self, request, *args, **kwargs):
        auth_status = Helper(request).is_autheticated()
        if(auth_status['status']):
            data=request.data
            department = Department.objects.filter(id=data['department']).first()
            resolve_process=Process(departmentid=department,name=data['name'],position=data['position'],description=data['description'])
            resolve_process.save()
            for step in data["steps"]:
                resolve_step=Steps(stepid=resolve_process,name=step['name'],description=step['description'],position=step['position'])
                resolve_step.save()
            return Response({'status': True,'message':"Process saved successfully"}, status=status.HTTP_200_OK)
            
        else:
            return Response({'status': False,'message':"Unathorised"}, status=status.HTTP_200_OK)
        