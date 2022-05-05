from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None
    phone = models.CharField(max_length=25, unique=True)
    code = models.IntegerField(default=0)
    country = models.CharField(max_length=10)
    avatar = models.CharField(max_length=255,blank=True)
    job_title = models.CharField(max_length=255,blank=True)
    company_name = models.CharField(max_length=255,blank=True)
    email_verified = models.BooleanField(null=True)

    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]