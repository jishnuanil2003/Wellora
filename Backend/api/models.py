from django.db import models
from django.contrib.auth.hashers import make_password
# from django.contrib.auth.models import AbstractBaseUser , BaseUserManager , PermissionsMixin

# Create your models here.
class User_Register(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(default='noemail@gmail.com')
    password = models.CharField(max_length=128)
    confirm_password = models.CharField(max_length=128)
    date_joined = models.DateTimeField(auto_now_add=True)

    def save(self,*args,**kwargs):
        if not self.pk:
            self.password = make_password(self.password)
            self.confirm_password = make_password(self.confirm_password)
        super().save(*args,**kwargs)
        
    def __str__(self):
        return self.email