from django.contrib.auth.models import User
from django.db import models

from books.models import Book


class ReadingGoal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    year = models.IntegerField()
    target_books = models.PositiveIntegerField()
    progress = models.PositiveIntegerField(default=0)

class TBR(models.Model):  # To Be Read
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    month = models.DateField()   # store as YYYY-MM-01
    books = models.ManyToManyField(Book, blank=True)
