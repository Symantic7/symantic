from rest_framework import generics, filters
from .serializers import MovieSerializer
from .models import Movie
from django_filters.rest_framework import DjangoFilterBackend

class MovieList(generics.ListAPIView):
    queryset = Movie.objects.order_by('-created_at').all()
    serializer_class = MovieSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category_id','release_type']
    search_fields = ['name', 'description']