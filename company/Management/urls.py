from django.urls import include, path
from company.Management import views

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('product/<str:pk>', views.eventDetail),
    path('products/', views.eventListAll),
    path('product/create/',views.eventCreate),
    path('product/update/<str:pk>', views.eventUpdate),
    path('product/q/', views.eventModQuantity), 
    path('product/delete/<str:pk>', views.eventDelete),
]