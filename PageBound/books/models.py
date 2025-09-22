from django.db import models
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)   # (or a separate Author model if needed)
    description = models.TextField()
    cover_image = models.ImageField(upload_to="book_covers/", blank=True, null=True)
    published_date = models.DateField(blank=True, null=True)
    isbn = models.CharField(max_length=20, unique=True, null=True, blank=True)

