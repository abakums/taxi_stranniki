import json

from django.core.management.base import BaseCommand
from cars.models import Brand, Model


class Command(BaseCommand):
    help = 'Create cars command'

    def handle(self, *args, **kwargs):
        with open("file.json", "r") as my_file:
            capitals_json = my_file.read()

        cars = json.loads(capitals_json)
        for key, value in cars.items():
            brand = Brand(
                title=key,
                value=int(value.get("value"))
            )
            brand.save()

            models_to_create = []
            for model in value.get("models"):
                if model[0] in {"-", "--"} or brand.title == "Ё-мобиль":
                    continue
                m = Model(
                    brand=brand,
                    title=model[0],
                    value=int(model[1])
                )
                models_to_create.append(m)
            Model.objects.bulk_create(models_to_create)
            print("Создали ", brand.title)
