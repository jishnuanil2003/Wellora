from django.urls import path
from .views import booking ,bookingDetails , MessageView

urlpatterns = [
    path('booking/',booking.as_view(),name='booking'),
    path('booking/<int:pk>/',bookingDetails.as_view(),name='booking'),

    path('message/',MessageView.as_view(),name='message')
]
