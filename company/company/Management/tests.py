from company.Management.views import eventListAll,eventCreate
from django.test import SimpleTestCase, TestCase, Client
from django.urls import reverse, resolve
from company.Management.models import Product
from django.http import HttpResponse
import json

class Test(SimpleTestCase):
    def testing_urls(self):
        url = reverse('list')
        print(resolve(url))
        self.assertEquals(resolve(url).func,eventListAll)
    def testing_urls2(self):
        url = reverse('create')
        print(resolve(url))
        self.assertEquals(resolve(url).func,eventCreate)
class TestView(TestCase):
    def testing_GET(self):
        client = Client()
        response = client.get(reverse('list'))
        self.assertEquals(response.status_code,200)
    def testing_POST(self):
        response = Client().post(reverse('create'), {
            'name':'Sardine',
            'productSKU':"SDN500EC",
            'price': 9.99,
            'weight':5,
            'quantity':1,
            'registerDate':'2020/01/01',
            'segment':'F'
        })
        self.assertEquals(response.status_code,201)
class ClassTest():
    # pylint: disable=no-member
    Product.objects.create(
            productID=1,
            name='Sardine',
            productSKU="SDN500EC",
            price=9.99,
            weight=5,
            quantity=1,
            registerDate='2020/01/01',
            segment='F'
    )