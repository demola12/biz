
from django.db import models
from .department_model import *
# Create your models here.

class Process(models.Model):
    departmentid = models.ForeignKey(Department, on_delete=models.CASCADE, related_name='department')
    name = models.CharField(max_length=255)
    description = models.TextField(blank = True)
    archive = models.IntegerField(default=0)
    position = models.IntegerField(default=0)
    create_date = models.DateTimeField(auto_now_add=True)

class DefualtProcess(models.Model):
    departmentid = models.ForeignKey(DefualtDepartment, on_delete=models.CASCADE, related_name='department')
    name = models.CharField(max_length=50)
    description = models.TextField(blank = True)

