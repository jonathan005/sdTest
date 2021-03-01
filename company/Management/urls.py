from django.urls import include, path
from django.conf.urls import url
from company.Management import views
from django.views.generic.base import TemplateView
from company.Management.ang.views import get_angular_template,AngularTemplateView
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('product/<str:pk>', views.eventDetail),
    path('products/', views.eventListAll),
    path('product/create/',views.eventCreate),
    path('product/update/<str:pk>', views.eventUpdate),
    path('product/q/', views.eventModQuantity), 
    path('product/delete/<str:pk>', views.eventDelete),
    url(r'^api/templates(?P<item>[A-Za-z0-9\_\-\.\/]+)\.html$', AngularTemplateView.as_view()),
    path('',TemplateView.as_view(template_name='ang/index.html'))
]