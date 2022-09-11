from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(('user_service.urls', 'user_service'), namespace='user_service')),
]
