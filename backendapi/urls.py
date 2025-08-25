from django.urls import path
from . import views

urlpatterns = [
    path("home/", views.HomepageApiView.as_view(), name="home"),
    path("about/", views.AboutApiView.as_view(), name="About"),
    path("languages/", views.LanguageApi.as_view(), name="langauges"),
    path("projects/", views.ProjectsApi.as_view(), name="project"),
    path("social/", views.SocialMediaLinkApi.as_view(), name="social"),
    path("services/", views.ServiceApi.as_view(), name="service"),
    path(
        "work-experience/",
        views.MyWorkExperienceAPI.as_view(),
        name="work-experience",
    ),
    path("education-details/", views.EducationDetailsApi.as_view(), name="education-details"),
    path("project-photos/", views.ProjectPhotosApi.as_view(), name="project-photos"),
    path("contactme/", views.VisitorContactMeApi.as_view(), name="contactme"),
    
  ] 
