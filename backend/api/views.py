from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .models import To_learn
from .serializers import ToLearnSerializer, UserSerializer, MyTokenObtainPairSerializer 



class LearnViewSet(viewsets.ModelViewSet):
	queryset = To_learn.objects.all()
	serializer_class = ToLearnSerializer
	permission_classes = [permissions.IsAuthenticated]	
	authentication_classes = [JWTAuthentication]
	# permission_classes = [permissions.AllowAny]
	# authentication_classes = ()

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

class MyTokenObtainPairView(TokenObtainPairView):
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

# class CatViewSet(viewsets.ReadOnlyModelViewSet):
# 	"""This viewset automatically provides `list` and `detail` actions."""
# 	queryset = Category.objects.all()
# 	serializer_class = CategorySerializer

