from django.db import models

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

    class Meta:
        verbose_name_plural = "Homepage Section"

        def __str__(self) -> str:
            return self.name


class About(models.Model):
    title = models.CharField(
        max_length=100,
        blank=True,
    )
    subtitle = models.CharField(max_length=100, blank=True)
    description = 