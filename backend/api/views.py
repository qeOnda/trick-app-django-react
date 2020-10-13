from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView 
from rest_framework.response import Response 
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer, MyTokenObtainPairSerializer
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication




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
	permission_classes = [permissions.IsAuthenticated]	
	authentication_classes = [JWTAuthentication]

# class TrickList(generics.ListCreateAPIView):
# 	queryset = To_learn.objects.all()
# 	serializer_class = ToLearnSerializer
# 	permission_classes = [permissions.AllowAny]
# 	authentication_classes = 	

@api_view(['GET', 'POST'])
def add_retrieve_tricks(request):
	if request.method == 'GET':
		tricks = To_learn.objects.all()
		tricks_serializer = ToLearnSerializer(data, context={'request': request}, many=True)
		return Response(tricks_serializer.data)
	
	elif request.method == 'POST':
		tricks_serializer = ToLearnSerializer(data=request.data)
		if tricks_serializer.is_valid():
			tricks_serializer.save()
			return Response(status=status.HTTP_201_CREATED)
		return Response(trick_serializer.errors, status=status.HTTP_400_BAD_REQUEST)	


class TrickCreate(APIView):
	permission_classes = [permissions.AllowAny]
	authentication_classes = ()

	def post(self, request, format='json'):
		serializer = ToLearnSerializer(data=request.data)
		if serializer.is_valid():
			tricks = serializer.save()
			if tricks:
				json = serializer.data 
				return Response(json, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)		

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

        
