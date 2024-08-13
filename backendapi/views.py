from django.shortcuts import render
from rest_framework import generics, mixins
from . import serializers
from . import models


class HomepageApiView(generics.ListAPIView):
    queryset = models.Homepage.objects.all()
    serializer_class = serializers.HomepageSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        return super().perform_create(serializer)

class AboutApiView(generics.ListAPIView):
    queryset = models.About.objects.all()
    serializer_class = serializers.AboutSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        return super().perform_create(serializer)
