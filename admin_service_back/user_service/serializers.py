from rest_framework import serializers

from user_service.models import Group, MyUser


class GroupSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    group_name = serializers.CharField()
    description = serializers.CharField(required=False)

    def create(self, validated_data):
        return Group.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.group_name = validated_data.get('group_name', instance.group_name)
        instance.description = validated_data.get('description', instance.description)

        instance.save()
        return instance


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user_name = serializers.CharField()
    created = serializers.DateField(read_only=True)
    group = GroupSerializer()

    def create(self, validated_data):
        group_data = validated_data.pop("group")

        group = Group.objects.get(group_name=group_data["group_name"])
        user = MyUser.objects.create(**validated_data, group=group)
        return user

    def update(self, instance, validated_data):
        group_data = validated_data.pop('group')

        instance.user_name = validated_data.get('user_name', instance.user_name)
        instance.group = Group.objects.get(group_name=group_data["group_name"])
        instance.save()
        return instance
