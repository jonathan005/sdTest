# Generated by Django 3.1.7 on 2021-02-26 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Management', '0007_product_quantity'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='registerDate',
            field=models.DateField(auto_now=True),
        ),
    ]