from django.urls import path
from rest_framework.routers import DefaultRouter


from .views import CustomUserAdminViewSet

router = DefaultRouter()
router.register('users', CustomUserAdminViewSet, basename='users_admin')

urlpatterns = []

urlpatterns += router.urls