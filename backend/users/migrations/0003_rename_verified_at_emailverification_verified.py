# Generated by Django 5.1.2 on 2024-11-05 14:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_rename_verifaction_token_emailverification_verification_token'),
    ]

    operations = [
        migrations.RenameField(
            model_name='emailverification',
            old_name='verified_at',
            new_name='verified',
        ),
    ]