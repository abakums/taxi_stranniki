from django.contrib import admin
from django.contrib.auth.models import User, Group
from django.conf import settings

from control_room.models import TaxiPark


@admin.register(TaxiPark)
class TaxiParkAdmin(admin.ModelAdmin):
    list_display = ("name", "link", "park_id", "api_key", "client_id")
    search_fields = ("name",)

    def link(self, obj):
        return f"{settings.HOST}/?park={obj.name}"

    link.short_description = "Ссылка на анкету"


admin.site.unregister(User)
admin.site.unregister(Group)
