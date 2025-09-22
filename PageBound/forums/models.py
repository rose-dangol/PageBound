from django.contrib.auth.models import User
from django.db import models

from books.models import Book


class ForumThread(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name="threads")
    title = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class ForumPost(models.Model):
    thread = models.ForeignKey(ForumThread, on_delete=models.CASCADE, related_name="posts")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
