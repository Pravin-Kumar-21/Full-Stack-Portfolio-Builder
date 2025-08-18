from django.db import models
from ckeditor.fields import RichTextField


class Homepage(models.Model):
    intro = models.CharField( 
        max_length=100, blank=True, null=True, verbose_name="User Introduction"
    )
    subcaption = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Subcaption"
    )
    name = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Full Name"
    )
    job_title = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Role"
    )
    paragraph = models.TextField(blank=True, null=True, verbose_name="Introduction")
    avatar_img = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Google Drive Image Id"
    )
    HireMe_link = models.CharField(max_length=100, blank=True, null=True)
    

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Homepage Section"


class About(models.Model):
    floating_captions= models.JSONField(blank=True,default=[] , verbose_name="Floating Captions", help_text="Enter the Floating Captions You want to display just like an array in python")
    description = models.CharField(
        max_length=500, blank=True, null=True, verbose_name="Brief Explanation about yourself"
    )
    

    def __str__(self) -> str:
        return self.description[:20] 

    class Meta:
        verbose_name_plural = "About Me"


class EducationDetails(models.Model):
    degree = models.CharField(max_length=100, blank=True, null=True)
    priority = models.IntegerField(blank=True, null=True, verbose_name="Priority" ,help_text="shows the order of education details")
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    marks_scored = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.degree

    class Meta:
        verbose_name_plural = "Education Details"


class ServicesOffred(models.Model):
    icon_image = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Google Drive Image Id"
    )
    service_name = models.CharField(max_length=40, blank=True, null=True)
    shadow_icon = models.CharField(max_length=40, blank=True, null=True)
    service_description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.service_name

    class Meta:
        verbose_name_plural = "Services Section"


class LanguagesIcons(models.Model):
    EXP_CHOICES = (
        ("Beginner", "Beginner"),
        ("Intermediate", "Intermediate"),
        ("Experienced", "Experienced"),
    )

    icon = models.CharField(
        max_length=100, blank=True, verbose_name="language Icon Image:(icons8.com)"
    )
    lang_name = models.CharField(
        max_length=100, blank=True, verbose_name="Language Name"
    )
    exp_level = models.CharField(
        max_length=200, blank=True, choices=EXP_CHOICES, verbose_name="Experience Level"
    )

    def __str__(self):
        return self.lang_name

    class Meta:
        verbose_name_plural = "Skills section"


class Project(models.Model):
    language_used = models.CharField(max_length=100, blank=True, null=True)
    about_avatar = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Google Drive Image Id"
    )
    priority = models.IntegerField(
        blank=True, null=True, verbose_name="Priority", help_text="shows the order of projects"
    )
    updated_on = models.DateTimeField(
        auto_now_add=False, null=True, auto_now=True, blank=True
    )
    Project_title = models.CharField(max_length=90, blank=True, null=True)
    Project_info = models.TextField(blank=True, null=True)
    project_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.Project_title

    class Meta:
        verbose_name_plural = "Projects Section"


class MyContact(models.Model):
    icon = models.CharField(
        max_length=90, blank=True, null=True, verbose_name="Icon (eg: fa -fa-twitter)"
    )
    contact_info = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        verbose_name="Contact Info (eg: johndoe2@gmail.com)",
    )
    contact_name = models.CharField(
        max_length=30, blank=True, null=True, verbose_name="Contact Name (eg: twitter)"
    )

    def __str__(self):
        return self.contact_name

    class Meta:
        verbose_name_plural = "Contacts Section"


class SocialMediaLinks(models.Model):
    name = models.CharField(max_length=80, blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    social_icon = models.CharField(
        max_length=60, blank=True, null=True, verbose_name="Icon (eg: fa -fa-twitter)"
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Social Media Links"


class WorkExperience(models.Model):
    company_name = models.CharField(max_length=100, blank=True, null=True)
    job_title = models.CharField(max_length=100, blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    description = RichTextField(blank=True, null=True)
    resume_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.company_name

    class Meta:
        verbose_name_plural = "Work Experience"


class ProjectPhotos(models.Model):
  
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="project_photos"
    )
    image_name = models.CharField(max_length=100, blank=True, null=True)
    image_url = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="Google Drive Image Id"
    )

    def __str__(self):
        return f"Photo for {self.project.Project_title}"

    class Meta:
        verbose_name_plural = "Project Photos"
        
        

class VisitorContactDetail(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    subject = models.CharField(max_length=200, blank=True, null=True)
    message = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"Contact Form from {self.name}"

    class Meta:
        verbose_name_plural = "Contact Form Submissions"
        
        
