# Generated by Django 3.1.7 on 2021-02-26 02:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('productID', models.PositiveSmallIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('productSKU', models.CharField(max_length=5)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('segment', models.CharField(choices=[('F', 'Fish'), ('M', 'Mollusc'), ('C', 'Crustacean')], default='F', max_length=1)),
            ],
        ),
        migrations.DeleteModel(
            name='Ciudad',
        ),
    ]
