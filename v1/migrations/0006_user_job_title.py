# Generated by Django 4.0.1 on 2022-01-16 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0005_process_position'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='job_title',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
