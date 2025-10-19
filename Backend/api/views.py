from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import Registration_Serializer
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.permissions import AllowAny
from.models import User_Register
# Create your views here.

class RegisterView(APIView):
    allowed_class = [AllowAny]
    def post(self,request):
        serializer = Registration_Serializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self,request):
        data = User_Register.objects.all()
        serializer = Registration_Serializer(data,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    