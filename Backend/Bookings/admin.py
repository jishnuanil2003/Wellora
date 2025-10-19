from django.contrib import admin
from .models import Booking_Model , Message_Model

# Register your models here.
admin.site.register(Booking_Model)
admin.site.register(Message_Model)