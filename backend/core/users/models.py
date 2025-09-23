from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
import os

LEVEL_OF_KNOWLEDGE = (
    ("A1", "Beginner"),
    ("A2", "Elementary"),
    ("B1", "Intermediate"),
    ("B2", "Upper-Intermediate"),
    ("C1", "Advanced"),
    ("C2", "Proficiency"),
)

def avatar_upload_path(instance, filename):
    ext = filename.split(".")[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    return os.path.join("avatars", str(instance.id), filename)


class CustomUser(AbstractUser):
    avatar = models.ImageField(upload_to=avatar_upload_path, null=True, blank=True)
    knowledge_level = models.CharField(choices=LEVEL_OF_KNOWLEDGE, default="A1")
    is_teacher = models.BooleanField()

    def __str__(self):
        return self.username
