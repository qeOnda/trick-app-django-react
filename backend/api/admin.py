from django.contrib import admin
from . import models


class UserAdmin(admin.ModelAdmin):
	model = models.User

#admin.site.register(models.Category),
admin.site.register(models.To_learn),
admin.site.register(models.User, UserAdmin),
