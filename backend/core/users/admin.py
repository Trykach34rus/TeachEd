from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth import get_user_model

User = get_user_model()

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = \
        'username', 'first_name', 'last_name', 'email', \
        'avatar', 'knowledge_level', 'is_teacher',
    list_display_links = 'username', 'avatar',
    list_editable = \
        'first_name', 'last_name', 'email', \
        'knowledge_level', 'is_teacher',
    list_filter = 'knowledge_level', 'is_teacher',
