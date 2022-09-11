from datetime import date

from django.db import models


class Group(models.Model):
    group_name = models.CharField(max_length=120, unique=True)
    description = models.TextField()


class MyUser(models.Model):
    user_name = models.CharField(max_length=120, unique=True)
    created = models.DateField(default=date.today)
    group = models.ForeignKey(Group, default=None, on_delete=models.PROTECT)
