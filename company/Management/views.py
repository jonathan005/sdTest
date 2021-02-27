from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.core import serializers
from company.Management.models import Product
from company.Management.serializers import ProductSerializer,QuantitySerializer
import json
@api_view(['GET'])
def eventListAll(request):
     # pylint: disable=no-member
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def eventDetail(request,pk):
     # pylint: disable=no-member]
    try:
        products = Product.objects.get(productID=pk)
        serializer = ProductSerializer(products, many=False)
        return Response(serializer.data,status=200)
    except Product.DoesNotExist:
        return Response(status=404)
       
@api_view(['POST'])
def eventCreate(request):
    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    else:
        return Response(status=400)
@api_view(['POST'])
def eventUpdate(request,pk):
    # pylint: disable=no-member
    products = Product.objects.get(productID=pk)
    serializer = ProductSerializer(instance=products,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(status=400)
@api_view(['POST'])
def eventModQuantity(request):
     # pylint: disable=no-member
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    product = Product.objects.get(productID=body['productID'])
    product.quantity += body['quantity']
    if (product.quantity < 0):
        return Response({"status":400,"message":"Not such quantity of products available"},status=400)
    serializer = ProductSerializer(instance=product,data=product.__dict__)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
@api_view(['DELETE'])
def eventDelete(request,pk):
    # pylint: disable=no-member
    products = Product.objects.get(productID=pk)
    products.delete()
    return Response("Deleted")