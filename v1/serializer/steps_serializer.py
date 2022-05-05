from rest_framework import serializers
from ..model.steps_model import Steps,DefualtSteps
from ..model.user_model import User
from .user_serializer import UserSerializer


class StepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Steps
        fields=['id','completed','timecompleted','stepid','name','description','archive','position','create_date']


class DefualtStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = DefualtSteps
        fields=['id','stepid','name','description','position']
