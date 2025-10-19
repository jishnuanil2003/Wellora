from .models import Booking_Model,Message_Model
from rest_framework import serializers

class Booking_Serializers(serializers.ModelSerializer):
    class Meta:
        model = Booking_Model
        fields = '__all__'

class Message_Serializers(serializers.ModelSerializer):
    class Meta:
        model = Message_Model
        fields = '__all__'