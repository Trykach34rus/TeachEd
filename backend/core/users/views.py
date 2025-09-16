from rest_framework import generics, permissions
from django.contrib.auth import get_user_model
from .serializers import UserSerializer

CustomUser = get_user_model()

class UserListAPIView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
