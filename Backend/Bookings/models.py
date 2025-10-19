from django.db import models

# Create your models here.
class Booking_Model(models.Model):
    name = models.CharField(max_length=50)
    Age = models.IntegerField()
    Male = models.BooleanField(blank=True,null=True)
    Female = models.BooleanField(blank=True,null=True)
    Department = models.CharField(max_length=100)
    Time = models.TimeField()
    Date = models.DateField()
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
class Message_Model(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(blank=True, null=True,default="noemail@example.com")
    phone = models.CharField(max_length=30)
    message = models.TextField()
    def __str__(self):
        return self.name

