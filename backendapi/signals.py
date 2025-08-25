from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.apps import apps
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync


MODEL_NAMES = [
    "Homepage",
    "About",
    "EducationDetails",
    "ServicesOffred",
    "LanguagesIcons",
    "Project",
    "SocialMediaLinks",
    "WorkExperience",
    "ProjectPhotos",
    "VisitorContactDetail",
]

channel_layer = get_channel_layer()

def notify_all_clients():
    async_to_sync(channel_layer.group_send)(
        "updates",
        {
            "type": "send_update",
            "message": "Data updated",
        }
    )

for model_name in MODEL_NAMES:
    model = apps.get_model("backendapi", model_name)

    @receiver(post_save, sender=model)
    def on_save(sender, instance, **kwargs):
        notify_all_clients()

    @receiver(post_delete, sender=model)
    def on_delete(sender, instance, **kwargs):
        notify_all_clients()