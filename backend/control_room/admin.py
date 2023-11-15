from django.contrib import admin
from django.contrib.auth.models import User, Group
from control_room.models import TaxiPark


@admin.register(TaxiPark)
class TaxiParkAdmin(admin.ModelAdmin):
    list_display = ("name", "park_id", "api_key", "client_id")
    search_fields = ("name",)


admin.site.unregister(User)
admin.site.unregister(Group)
