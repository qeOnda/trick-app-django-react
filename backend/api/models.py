from django.db import models



class Category(models.Model):
	name = models.CharField(max_length=100)
	def __str__(self):
		return self.name

class To_learn(models.Model):
	name = models.CharField(max_length=100)
	learned = models.BooleanField(default=False)
	cats = models.ForeignKey(Category, on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	video = models.URLField()
	def __str__(self):
		return self.name
