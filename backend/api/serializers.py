from rest_framework import serializers
from .models import To_learn, User 	
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class ToLearnSerializer(serializers.ModelSerializer):
	user_name = serializers.ReadOnlyField(source='user.username')
	#category = serializers.CharField(source='get_cats_display')
	class Meta:
		model = To_learn
		fields = ('id', 'user', 'name', 'user_name', 'learned', 'cats', 'video')


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

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['name'] = user.username
        return token
		

# class CategorySerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = Category
# 		fields = '__all__'
