from django.contrib.auth.models import User
from books.models import Book

from django.db import models

class BookList(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    books = models.ManyToManyField(Book, related_name="in_lists")
    upvotes = models.ManyToManyField(User, related_name="upvoted_lists", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)