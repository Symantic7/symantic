from django.db import models
from cloudinary.models import CloudinaryField
from apps.categories.models import Category
# Create your models here.

class Movie(models.Model):
    MY_CHOICES = (
        ('Newly Released', 'Newly Released'),
        ('Coming Soon', 'Coming Soon')
    )
    class Meta(object):
        db_table = 'movie'
    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True
    )
    description = models.TextField(
        'description', blank=False, null=False, max_length=500
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    image_mobile = CloudinaryField(
        'image mobile', blank=True, null=True
    )
    release_type = models.CharField(
        'release_type', blank=False, null=False, max_length=50, choices= MY_CHOICES
    )
    category_id = models.ForeignKey(
        Category, on_delete=models.CASCADE
    )
    rating = models.IntegerField(
        'rating', blank=False, null=False
    )
    release_date = models.IntegerField(
        'release date' , blank=False, null=False
    )
    trailer_link = models.CharField(
        'Trailer Link', blank=False, null=False, max_length=500
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )