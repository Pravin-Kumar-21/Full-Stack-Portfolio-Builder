from django.urls import path
from . import views

urlpatterns = [
    path("home/", views.HomepageApiView.as_view(), name="home"),
    path("About/", views.AboutApiView.as_view(), name="About"),
]
