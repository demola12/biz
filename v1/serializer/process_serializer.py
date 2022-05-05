from rest_framework import serializers
from .steps_serializer import StepSerializer,DefualtStepSerializer
from ..model.steps_model import Steps,DefualtSteps
from ..model.process_model import Process,DefualtProcess


class ProcessSerializer(serializers.ModelSerializer):
    steps = serializers.SerializerMethodField("get_steps")
    class Meta:
        model = Process
        fields=['id','departmentid','name','description','archive','create_date','steps','position']

    def get_steps(self, step_detail):
        return StepSerializer(Steps.objects.filter(stepid_id=step_detail.id), many=True).data

class DefualtProcessSerializer(serializers.ModelSerializer):
    steps = serializers.SerializerMethodField("get_steps")
    class Meta:
        model = DefualtProcess
        fields=['id','departmentid','name','description','archive','create_date']
    def get_steps(self, step_detail):
        return DefualtStepSerializer(DefualtSteps.objects.filter(stepid_id=step_detail.id).first(), many=True).data
