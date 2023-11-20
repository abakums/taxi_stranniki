from django.contrib import admin

from cars.models import Color, Brand, Model


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ("title",)


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ("title", "value")
    search_fields = ("title",)


@admin.register(Model)
class ModelAdmin(admin.ModelAdmin):
    list_display = ("title", "value")
    search_fields = ("title",)
