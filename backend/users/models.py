import uuid
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


#Store email verification token for user registration
class EmailVerification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    verification_token = models.UUIDField(
        default=uuid.uuid4, editable=False, unique=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)

    @property
    def is_token_expired(self):
        expiration_time = timezone.timedelta(minutes=15)
        return timezone.now() > self.created_at + expiration_time