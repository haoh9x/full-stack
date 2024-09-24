from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/admin/', include("user.urls")),
    path('auth/', include("djoser.urls")),
    path('auth/', include("user.jwt")),
]
