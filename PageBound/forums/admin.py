from django.contrib import admin

from forums.models import *

# Register your models here.
admin.site.register(ForumThread)
admin.site.register(ForumPost)

