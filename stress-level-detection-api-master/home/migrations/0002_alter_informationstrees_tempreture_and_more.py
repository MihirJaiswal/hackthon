# Generated by Django 5.0.1 on 2024-04-27 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='informationstrees',
            name='Tempreture',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='informationstrees',
            name='humidity',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='informationstrees',
            name='step_count',
            field=models.IntegerField(),
        ),
    ]