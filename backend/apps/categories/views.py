from rest_framework import generics
from .serializers import CategorySerializer
from .models import Category

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.order_by('-created_at').all()
    serializer_class = CategorySerializer