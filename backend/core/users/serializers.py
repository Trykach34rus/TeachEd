from rest_framework import serializers
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from djoser.serializers import UserCreateSerializer, UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    password = serializers.CharField(write_only=True)

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'password', 'is_teacher',)

class UserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = User
        exclude = 'password',

class UserAvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "avatar",
