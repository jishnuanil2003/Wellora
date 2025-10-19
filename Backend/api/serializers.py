from rest_framework import serializers
from.models import User_Register

class Registration_Serializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User_Register
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}
    
    def validate(self, data):
        if(data['password']!=data['confirm_password']):
             raise serializers.ValidationError("Passwords do not match")
        return data