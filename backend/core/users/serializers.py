from djoser.serializers import UserCreateSerializer, UserSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'

class UserSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        model = User
        exclude = 'password',
