from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
	pass

class To_learn(models.Model):
	TYPES = (
		('flip', 'Flip'),
		('grind', 'Grind'),
		('slide', 'Slide'),
		('manual', 'Manual'),
	)
	name = models.CharField(max_length=100)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	learned = models.BooleanField(default=False)
	cats = models.CharField(max_length=10, choices=TYPES)
	created_at = models.DateTimeField(auto_now_add=True)
	video = models.URLField()
	def __str__(self):
		return self.name

