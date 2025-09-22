from django.contrib.auth.models import User
from django.db import models

from books.models import Book

class Quest(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    theme = models.CharField(max_length=100)  # e.g., "Fantasy worlds", "Classics"

class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField(upload_to="badges/", blank=True, null=True)

class QuestProgress(models.Model):
    quest = models.ForeignKey(Quest, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    books_read = models.ManyToManyField(Book, blank=True)
    earned_badges = models.ManyToManyField(Badge, blank=True)