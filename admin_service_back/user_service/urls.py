from rest_framework.routers import DefaultRouter
from .views import UserView, GroupView

app_name = 'api'

router = DefaultRouter()
router.register('users', UserView, basename='users')
router.register('groups', GroupView, basename='groups')

urlpatterns = router.urls
