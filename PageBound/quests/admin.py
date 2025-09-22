from django.contrib import admin

from quests.models import *

# Register your models here.
admin.site.register(Quest)
admin.site.register(Badge)
admin.site.register(QuestProgress)