from rest_framework import serializers
from .models import Category, To_learn

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__'

class ToLearnSerializer(serializers.ModelSerializer):
	cat_name = serializers.ReadOnlyField(source='cats.name')
	class Meta:
		model = To_learn
		fields = ('id', 'name', 'learned', 'cat_name', 'cats', 'video')