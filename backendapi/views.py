from django.shortcuts import render
from rest_framework import generics, mixins
from . import serializers
from . import models


class HomepageApiView(generics.ListAPIView):
    queryset = models.Homepage.objects.all()
    serializer_class = serializers.HomepageSerializer


class AboutApiView(generics.ListAPIView):
    queryset = models.About.objects.all()
    serializer_class = serializers.AboutSerializer


class ServiceApi(generics.ListAPIView):
    queryset = models.ServicesOffred.objects.all()
    serializer_class = serializers.ServiceSerializer


class LanguageApi(generics.ListAPIView):
    queryset = models.LanguagesIcons.objects.all()
    serializer_class = serializers.LanguageiconSerializer


class ProjectsApi(generics.ListAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer


class SocialMediaLinkApi(generics.ListAPIView):
    queryset = models.SocialMediaLinks.objects.all()
    serializer_class = serializers.SocialMediaLinksSerializer


class MycontactApi(generics.ListAPIView):
    queryset = models.MyContact.objects.all()
    serializer_class = serializers.MyContactSerializer
