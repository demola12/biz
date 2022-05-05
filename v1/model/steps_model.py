
from django.db import models
from .process_model import *
# Create your models here.

class Steps(models.Model):
    stepid = models.ForeignKey(Process, on_delete=models.CASCADE, related_name='process')
    name = models.CharField(max_length=255)
    description = models.TextField(blank = True)
    archive = models.IntegerField(default=0)
    position = models.IntegerField()
    completed = models.BooleanField(default=False)
    timecompleted = models.IntegerField(default=0)
    create_date = models.DateTimeField(auto_now_add=True)

class DefualtSteps(models.Model):
    stepid = models.ForeignKey(DefualtProcess, on_delete=models.CASCADE, related_name='process')
    name = models.CharField(max_length=50)
    description = models.TextField(blank = True)
    position = models.IntegerField()

