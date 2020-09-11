from django.urls import path, include
from rest_framework.routers import DefaultRouter 

from . import views


router = DefaultRouter()
router.register(r'tricks', views.LearnViewSet)
router.register(r'cats', views.CatViewSet)

urlpatterns = [
	path(r'api/', include(router.urls)),
]

urlpatterns += [
	path('api-auth/', include('rest_framework.urls')),
]

# path('api/tricks/', views.LearnListCreate.as_view()),
# path('api/tricks/<int:pk>/', views.LearnList.as_view()),
# path('api/cats/', views.CatListCreate.as_view()),