from django.db.models import ProtectedError
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response

from user_service.models import MyUser, Group
from user_service.serializers import UserSerializer, GroupSerializer


class UserView(viewsets.ViewSet):
    @staticmethod
    def list(request):
        queryset = MyUser.objects.all()
        serializer = UserSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    @staticmethod
    def create(request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def update(request, pk=None):
        queryset = MyUser.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def destroy(request, pk=None):
        queryset = MyUser.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        user.delete()
        return Response(f"Object id={pk} Deleted", status=status.HTTP_204_NO_CONTENT)


class GroupView(viewsets.ViewSet):
    @staticmethod
    def list(request):
        queryset = Group.objects.all()
        serializer = GroupSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @staticmethod
    def create(request):
        serializer = GroupSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def update(request, pk=None):
        queryset = Group.objects.all()
        group = get_object_or_404(queryset, pk=pk)
        serializer = GroupSerializer(group, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @staticmethod
    def destroy(request, pk=None):
        queryset = Group.objects.all()
        group = get_object_or_404(queryset, pk=pk)
        try:
            group.delete()
        except ProtectedError:
            return Response(f"Users existed in this group", status=status.HTTP_409_CONFLICT)
        return Response(f"Object id={pk} Deleted", status=status.HTTP_204_NO_CONTENT)