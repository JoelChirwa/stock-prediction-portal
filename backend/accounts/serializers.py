from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=4, style={'input_type': 'password'})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    def create(self, validated_data):
       
        username = validated_data.get('username')
        email = validated_data.get('email', '')
        password = validated_data.get('password')

        user = User.objects.create_user(username=username, email=email, password=password)
        return user
