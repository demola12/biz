
from django.db import models
from .user_model import User
# Create your models here.

class Department(models.Model):
    userid = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    name = models.CharField(max_length=255)
    description = models.TextField(blank = True)
    archive = models.IntegerField(default=0)
    create_date = models.DateTimeField(auto_now_add=True)

class DefualtDepartment(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank = True)
    

