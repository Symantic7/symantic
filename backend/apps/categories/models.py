from django.db import models

# Create your models here.
class Category(models.Model):
    class Meta(object):
        db_table = 'category'
    name = models.CharField(
        'name', blank=False, null=False, max_length=50
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
    def __str__(self):
        return self.name