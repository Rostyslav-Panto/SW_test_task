# Generated by Django 4.1.1 on 2022-09-11 15:50

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group_name', models.CharField(max_length=120, unique=True)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='MyUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=120, unique=True)),
                ('created', models.DateField(default=datetime.date.today)),
                ('group', models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, to='user_service.group')),
            ],
        ),
    ]
