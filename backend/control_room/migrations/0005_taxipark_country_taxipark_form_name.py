# Generated by Django 4.1.1 on 2023-11-16 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('control_room', '0004_remove_taxipark_work_rule_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='taxipark',
            name='country',
            field=models.CharField(choices=[('ru', 'Россия'), ('kz', 'Казахстан')], default='ru', max_length=10, verbose_name='Страна'),
        ),
        migrations.AddField(
            model_name='taxipark',
            name='form_name',
            field=models.CharField(default='', max_length=200, verbose_name='Заголовок анкеты'),
        ),
    ]