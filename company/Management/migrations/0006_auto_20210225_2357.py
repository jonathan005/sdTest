# Generated by Django 3.1.7 on 2021-02-26 04:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Management', '0005_auto_20210225_2208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='productID',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
