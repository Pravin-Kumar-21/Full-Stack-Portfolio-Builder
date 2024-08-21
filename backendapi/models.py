from django.db import models
from ckeditor.fields import RichTextField


class Homepage(models.Model):
    intro = models.CharField(
        max_length=100, blank=True, null=True, verbose_name="User Introduction"
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
    Resume_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Homepage Section"


class About(models.Model):
    Heading = models.CharField(
        max_length=100,
        blank=True,
    )
    subheading = models.CharField(max_length=100, blank=True)
    description = RichTextField(
        blank=True, null=True, verbose_name="Brief Explanation about yourself"
    )

    def __str__(self) -> str:
        return self.Heading

    class Meta:
        verbose_name_plural = "About Me"


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
    updated_on = models.DateTimeField(
        auto_now_add=False, null=True, auto_now=True, blank=True
    )
    Project_title = models.CharField(max_length=90, blank=True, null=True)
    Project_info = models.TextField(blank=True, null=True)
    project_link = models.URLField(blank=True, null=True)
    demo_link = models.URLField(blank=True, null=True)

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
