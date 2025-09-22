from django.contrib.auth.models import User
from django.db import models

from books.models import Book


class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="reviews")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=2, decimal_places=1)  # e.g., 3.5 stars
    emoji_reaction = models.CharField(max_length=10, blank=True, null=True)
    sub_ratings = models.JSONField(blank=True, null=True)  # { "plot":4, "characters":5 }
    text = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
