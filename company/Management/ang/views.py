import os
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse, Http404
from django.views.generic import View

class AngularTemplateView(View):
    def get(self,request, item=None, *args, **kwargs):
        print(item)
        template_dir_path = settings.TEMPLATES[0]["DIRS"][0]
        final_path = template_dir_path + "/ang" + "/" +item + ".html"
        try:
            print(final_path)
            html = open(final_path)
            return HttpResponse(html)
        except:
            raise Http404
def get_angular_template(request,item=None):
    print(item)
    return render (request,'ang/app/blog-list.html',{})