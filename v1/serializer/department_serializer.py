from rest_framework import serializers
from ..model.department_model import DefualtDepartment,Department
from ..model.user_model import User
from  ..model.process_model import DefualtProcess,Process
from .process_serializer import ProcessSerializer,DefualtProcessSerializer
from .user_serializer import UserSerializer

class DepartmentSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField("get_user")
    process = serializers.SerializerMethodField("get_process")
    class Meta:
        model = Department
        fields=['id','userid','name','description','archive','create_date','user','process']

    def get_user(self, user_detail):
        return UserSerializer(User.objects.filter(id=user_detail.userid_id).first(), many=False).data
    def get_process(self, process_detail):
        return ProcessSerializer(Process.objects.filter(departmentid=process_detail.id), many=True).data

class DefualtDepartmentSerializer(serializers.ModelSerializer):
    process = serializers.SerializerMethodField("get_process")
    class Meta:
        model = DefualtDepartment
        fields=['id','name','description']
    def get_process(self, process_detail):
        return DefualtProcessSerializer(DefualtProcess.objects.filter(departmentid_id=process_detail.id).first(), many=True).data

