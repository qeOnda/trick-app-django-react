from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
	pass

class Category(models.Model):
	name = models.CharField(max_length=100)
	def __str__(self):
		return self.name

class To_learn(models.Model):
	name = models.CharField(max_length=100)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	learned = models.BooleanField(default=False)
	cats = models.ForeignKey(Category, on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	video = models.URLField()
	def __str__(self):
		return self.name

