from django.shortcuts import render
from rest_framework import generics, permissions
from django.core.mail import send_mail

from portfolio import settings
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



class MyWorkExperienceAPI(generics.ListAPIView):
    queryset = models.WorkExperience.objects.all()
    serializer_class = serializers.WorkExperienceSerializers


class EducationDetailsApi(generics.ListAPIView):
    queryset = models.EducationDetails.objects.all()
    serializer_class = serializers.EducationDetailsSerializer
    
    
class ProjectPhotosApi(generics.ListAPIView):
    queryset = models.ProjectPhotos.objects.all()
    serializer_class = serializers.ProjectPhotosSerializer
    

class VisitorContactMeApi(generics.CreateAPIView):
    queryset = models.VisitorContactDetail.objects.all()
    serializer_class = serializers.VisitorContactDetailSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        about_obj = models.About.objects.first()
        if not about_obj:
            raise ValueError(" No About object found in database. Please add one.")

        user_email = about_obj.my_email_id

        send_mail(
            subject=f"📩 New Contact Form Submission from {instance.name}",
            message=f"""
    You have a new contact form submission:

    Name: {instance.name}
    Email: {instance.email}
    Subject: {instance.subject}
    Message: {instance.message}
    """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[user_email],
            fail_silently=False,
        )