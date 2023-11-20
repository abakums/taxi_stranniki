from django.db import models


class Brand(models.Model):
    title = models.CharField("Название", max_length=200)
    value = models.IntegerField("Значение", default=0)

    class Meta:
        verbose_name = "марку"
        verbose_name_plural = "Марки"

    def __str__(self):
        return self.title


class Model(models.Model):
    title = models.CharField("Название", max_length=200)
    value = models.IntegerField("Значение", default=0)
    brand = models.ForeignKey(
        "cars.Brand",
        on_delete=models.CASCADE,
        verbose_name="Марка",
        related_name="models"
    )

    class Meta:
        verbose_name = "модель"
        verbose_name_plural = "Модели"

    def __str__(self):
        return f"{self.title} - {self.brand.title}"


class Color(models.Model):
    title = models.CharField("Название", max_length=100)

    class Meta:
        verbose_name = "цвет"
        verbose_name_plural = "Цвета"

    def __str__(self):
        return self.title
