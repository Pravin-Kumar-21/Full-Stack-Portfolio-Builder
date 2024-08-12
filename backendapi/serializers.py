from rest_framework import serializers
from .models import *


class HomepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homepage
        fields = "__all__"


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesOffred
        fields = "__all__"


class LanguageiconSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguagesIcons
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"


class MyContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyContact
        fields = "__all__"


class SocialMediaLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialMediaLinks
        fields = "__all__"
