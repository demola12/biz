# Generated by Django 4.0.1 on 2022-01-17 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0008_steps_completed_steps_timecompleted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='department',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='process',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='steps',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
