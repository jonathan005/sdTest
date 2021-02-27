from django.db import models

# Create your models here.
class Product(models.Model):
    productID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30,null=False, blank=False)
    productSKU = models.CharField(max_length=8,null=False, blank=False)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    weight = models.DecimalField(max_digits=10,decimal_places=3)
    quantity = models.IntegerField(default=1,null=False, blank=False)
    registerDate = models.DateField(auto_now=True)
    segments = [
        ('F', 'Fish'),
        ('M', 'Mollusc'),
        ('C', 'Crustacean')
    ]
    segment = models.CharField(max_length=1,choices=segments,default='F')

    def ProductDisplay(self):
        txt = '{0} - {1}'
        return txt.format(self.productSKU,self.name)
    def __str__(self):
        return self.ProductDisplay()

        