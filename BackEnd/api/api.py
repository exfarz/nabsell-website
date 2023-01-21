import json

from rest_framework.decorators import api_view
from django.http import HttpResponse

from model.Sliderdatas import Slider


@api_view()
def Sliderdata(request):
    obj = Slider(1, "قالب ری اکت شرکتی",
             "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
             "slider/h-2-01.jpg", "اطلاعات بیشتر", "/about")
    obj2 = Slider(2, "پول خود را هدر ندهید",
             "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
             "slider/h-2-02.jpg", "اطلاعات بیشتر", "/about")
    l = [obj, obj2]
    return HttpResponse(json.dumps(l, default=lambda o: o.__dict__), content_type='application/json')
