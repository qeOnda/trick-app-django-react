from rest_framework import viewsets, permissions

from .models import To_learn, Category
from .serializers import ToLearnSerializer, CategorySerializer
#from rest_framework import generics


class CatViewSet(viewsets.ReadOnlyModelViewSet):
	"""This viewset automatically provides `list` and `detail` actions."""
	queryset = Category.objects.all()
	serializer_class = CategorySerializer


class LearnViewSet(viewsets.ModelViewSet):
	queryset = To_learn.objects.all()
	serializer_class = ToLearnSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# class LearnListCreate(generics.ListCreateAPIView):
#     queryset = To_learn.objects.all()
#     serializer_class = ToLearnSerializer

# class LearnList(generics.RetrieveUpdateDestroyAPIView):
#     queryset = To_learn.objects.all()
#     serializer_class = ToLearnSerializer    

# class CatListCreate(generics.ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer

        
