# Generated by Django 3.1.7 on 2021-02-26 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Management', '0006_auto_20210225_2357'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.IntegerField(default=1),
        ),
    ]
