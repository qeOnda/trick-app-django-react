from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter 
from rest_framework_simplejwt import views as jwt_views
from . import views


router = DefaultRouter()
router.register(r'tricks', views.LearnViewSet)


urlpatterns = [
	path(r'api/', include(router.urls)),
	path('api/user/create/', views.UserCreate.as_view(), name="create_user"),
	path('api/token/obtain/', views.MyTokenObtainPairView.as_view(), name='token_create'),  # override sjwt stock token
	path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
	path('api/hello/', views.HelloWorldView.as_view(), name='hello_world')
]

urlpatterns += [
	path('api-auth/', include('rest_framework.urls')),
]
