from django.shortcuts import render
from rest_framework import generics, mixins
from .serializers import HomepageSerializer
from .models import Homepage


class HomepageListCreateApiView(generics.ListCreateAPIView):
    queryset = Homepage.objects.all()
    print(queryset)
    serializer_class = HomepageSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        return super().perform_create(serializer)
