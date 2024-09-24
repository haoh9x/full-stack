from rest_framework import serializers

from .models import CustomUser

class CustomUserAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'created_at', 'is_active', 'is_staff', 'is_superuser', 'updated_at', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'created_at', 'is_active', 'is_staff', 'is_superuser', 'updated_at', 'password']
        extra_kwargs = {'password': {'write_only': True}}