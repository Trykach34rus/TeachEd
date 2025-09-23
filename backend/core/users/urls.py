from rest_framework.routers import DefaultRouter
from django.urls import path
from . import views


urlpatterns = [
    path('avatar/', views.AvatarView.as_view(), name='avatar'),
]
