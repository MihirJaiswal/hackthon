from django.db import models
from home.models import *
# Create your models here.


class informationstrees(models.Model):
    humidity=models.IntegerField()
    Tempreture=models.IntegerField()
    step_count=models.IntegerField()
