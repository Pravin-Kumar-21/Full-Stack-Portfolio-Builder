from django.shortcuts import render
from rest_framework import generics
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


class MyWorkExperienceAPI(generics.ListAPIView):
    queryset = models.WorkExperience.objects.all()
    serializer_class = serializers.WorkExperienceSerializers


class EducationDetailsApi(generics.ListAPIView):
    queryset = models.EducationDetails.objects.all()
    serializer_class = serializers.EducationDetailsSerializer
    
    
class ProjectPhotosApi(generics.ListAPIView):
    queryset = models.ProjectPhotos.objects.all()
    serializer_class = serializers.ProjectPhotosSerializer
    

class VisitorContactMeApi(generics.ListCreateAPIView):
    queryset = models.VisitorContactDetail.objects.all()
    serializer_class = serializers.VisitorContactDetailSerializer

    def perform_create(self, serializer):
        serializer.save()