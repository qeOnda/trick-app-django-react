from rest_framework import serializers
from .models import Category, To_learn, User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__'

class ToLearnSerializer(serializers.ModelSerializer):
	cat_name = serializers.ReadOnlyField(source='cats.name')
	class Meta:
		model = To_learn
		fields = ('id', 'name', 'learned', 'cat_name', 'cats', 'video')

class UserSerializer(serializers.ModelSerializer):
	email = serializers.EmailField(required=True)
	username = serializers.CharField()
	password = serializers.CharField(min_length=8, write_only=True)

	class Meta:
		model = User
		fields = ('email', 'username', 'password')
		extra_kwargs = {'password': {'write_only': True}}

	def create(self, validated_data):
		password = validated_data.pop('password', None)
		instance = self.Meta.model(**validated_data)  # as long as the fields are the same, we can just use this
		if password is not None:
			instance.set_password(password)
		instance.save()
		return instance

