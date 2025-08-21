from rest_framework import serializers
from . import models


class HomepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Homepage
        fields = [
            "name",
            "intro",
            "subcaption",
            "job_title",
            "avatar_img",
            "paragraph",
            "HireMe_link",
        ]


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.About
        fields = [
            "description",
            "floating_captions",
            "resume_link",
        ]


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ServicesOffred
        fields = [
            "icon_image",
            "service_name",
            "shadow_icon",
            "service_description",
        ]


class LanguageiconSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LanguagesIcons
        fields = [
            "icon",
            "lang_name",
            "exp_level",
        ]


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = [
            "language_used",
            "about_avatar",
            "updated_on",
            "Project_title",
            "Project_info",
            "project_link",
            "priority",
        ]


class MyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MyContact
        fields = [
            "icon",
            "contact_info",
            "contact_name",
        ]


class SocialMediaLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SocialMediaLinks
        fields = [
            "name",
            "link",
            "social_icon",
        ]


class WorkExperienceSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.WorkExperience
        fields = [
            "company_name",
            "job_title",
            "start_date",
            "end_date",
            "description",
        ]


class EducationDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EducationDetails
        fields = [
            "degree",
            "start_date",
            "end_date",
            "marks_scored",
        ]
        
        
class ProjectPhotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProjectPhotos
        fields = [
            "project",
            "image_name",
            "image_url",
        ]


class VisitorContactDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.VisitorContactDetail
        fields = [
            "name",
            "email",
            "subject",
            "message",
        ]
        

