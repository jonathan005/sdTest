from rest_framework import serializers
from company.Management.models import Product

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('productID','name', 'productSKU', 'price', 'weight','segment','quantity')
class QuantitySerializer(serializers.HyperlinkedModelSerializer):
        productID = serializers.IntegerField()
        quantity = serializers.IntegerField()