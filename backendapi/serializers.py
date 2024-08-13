from rest_framework import serializers
from . import models


class HomepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Homepage
        fields = "__all__"


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.About
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ServicesOffred
        fields = "__all__"


class LanguageiconSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.LanguagesIcons
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = "__all__"


class MyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MyContact
        fields = "__all__"


class SocialMediaLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SocialMediaLinks
        fields = "__all__"
