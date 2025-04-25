from rest_framework import serializers
from . import models


class HomepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Homepage
        fields = [
            "name",
            "intro",
            "job_title",
            "avatar_img",
            "paragraph",
            "HireMe_link",
            "Resume_link",
        ]


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.About
        fields = [
            "Heading",
            "subheading",
            "description",
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
            "video_link",
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
