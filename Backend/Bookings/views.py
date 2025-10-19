from django.shortcuts import render
from rest_framework.views import APIView
from .models import Booking_Model , Message_Model
from .serializers import Booking_Serializers, Message_Serializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

# Create your views here.
class booking(APIView):
    def post(self,request):
        serializer_class = Booking_Serializers(data = request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self,request):
        fields = Booking_Model.objects.all()
        serializer_class = Booking_Serializers(fields ,many=True)
        return Response(serializer_class.data)

class bookingDetails(APIView):
    def get_object(self, pk):
        try:
            return Booking_Model.objects.get(pk=pk)
        except Booking_Model.DoesNotExist:
            return None

    def get(self,pk,request):
        booking = self.get_object(pk)
        if booking:
           serializer_class = Booking_Serializers(booking)
           return Response(serializer_class.data , status=status.HTTP_200_OK)
        else:
            return Response("Booking not found",status=status.HTTP_404_NOT_FOUND)
        
class MessageView(APIView):
     permission_classes = [AllowAny]
     def post(self,request):
        serializer = Message_Serializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
     def get(self,request):
         fields = Message_Model.objects.all()
         serializer = Message_Serializers(fields ,many=True)
         return Response(serializer.data)