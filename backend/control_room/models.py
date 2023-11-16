import uuid
import requests
from django.db import models
from django import forms
from django.contrib.postgres.fields import ArrayField
from django.conf import settings


class ChoiceArrayField(ArrayField):
    def formfield(self, **kwargs):
        defaults = {
            'form_class': forms.MultipleChoiceField,
            'choices': self.base_field.choices,
        }
        defaults.update(kwargs)
        return super(ArrayField, self).formfield(**defaults)


class TaxiPark(models.Model):
    TAXI_TYPE = "taxi"
    AUTO_COURIER_TYPE = "auto_courier"
    FOOT_COURIER_TYPE = "foot_courier"
    CARGO_TRANSPORTATION_TYPE = "cargo_transportation"
    MOTO_COURIER_TYPE = "moto_courier"
    TAXI_PARK_TYPES = (
        (TAXI_TYPE, "Такси"),
        (AUTO_COURIER_TYPE, "Авто курьер"),
        (FOOT_COURIER_TYPE, "Пеший или Вело курьер"),
        (CARGO_TRANSPORTATION_TYPE, "Грузоперевозки"),
        (MOTO_COURIER_TYPE, "Мото курьер")
    )

    RU_COUNTRY = "ru"
    KZ_COUNTRY = "kz"
    COUNTRIES = (
        (RU_COUNTRY, "Россия"),
        (KZ_COUNTRY, "Казахстан")
    )

    name = models.CharField("Название", max_length=200)
    park_id = models.CharField("ID парка", max_length=100)
    api_key = models.CharField("API ключ", max_length=100)
    client_id = models.CharField("ID клиента", max_length=100)
    taxi_park_type = ChoiceArrayField(
        models.CharField(
            max_length=25,
            choices=TAXI_PARK_TYPES
        ),
        default=list,
        verbose_name="Типы такси парка",
        blank=True
    )
    country = models.CharField("Страна", max_length=10, choices=COUNTRIES, default=RU_COUNTRY)
    form_name = models.CharField("Заголовок анкеты", max_length=200, default="")

    class Meta:
        verbose_name = "такси парк"
        verbose_name_plural = "Такси парки"

    def __str__(self):
        return self.name

    @property
    def work_rule_id(self):
        headers = self.get_auth_headers()
        response = requests.get(f"{settings.YANDEX_TAXI_API_HOST}/v1/parks/driver-work-rules?park_id={self.park_id}", headers=headers)
        data = response.json()
        return data.get("rules")[0].get("id")

    def get_auth_headers(self):
        return {
            "X-Client-ID": self.client_id,
            "X-Api-Key": self.api_key,
            "X-Park-ID": self.park_id,
            "X-Idempotency-Token": str(uuid.uuid4()),
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
