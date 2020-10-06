from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer, MyTokenObtainPairSerializer



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

class UserCreate(APIView):
	permission_classes = [permissions.AllowAny]
	authentication_classes = ()

	def post(self, request, format='json'):
		serializer = UserSerializer(data=request.data)
		if serializer.is_valid():
			user = serializer.save()
			if user:
				json = serializer.data 
				return Response(json, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)		

class HelloWorldView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	
	def get(self, request):
		return Response(data={"hello":"world"}, status=status.HTTP_200_OK)

class ObtainTokenPairWithColorView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny,]
    serializer_class = MyTokenObtainPairSerializer



# class LearnListCreate(generics.ListCreateAPIView):
#     queryset = To_learn.objects.all()
#     serializer_class = ToLearnSerializer

# class LearnList(generics.RetrieveUpdateDestroyAPIView):
#     queryset = To_learn.objects.all()
#     serializer_class = ToLearnSerializer    

# class CatListCreate(generics.ListCreateAPIView):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer

        
