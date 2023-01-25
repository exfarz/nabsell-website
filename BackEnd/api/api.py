import json

from rest_framework.decorators import api_view
from django.http import HttpResponse

from model.Sliderdatas import Slider
from model.about import about
from model.testimonials import testimo


@api_view()
def Sliderdata(request):
    obj = Slider(1, "مواد خوراکی",
                 "تازه ترین سبزیجات و مواد خوراکی",
                 "slider/h-2-04.jpg", "اطلاعات بیشتر", "/about")
    obj2 = Slider(2, "پوشاک",
                  "بهترین و با کیفیت ترین لباس های روز بازار.",
                  "slider/h-2-03.jpg", "اطلاعات بیشتر", "/about")
    obj3 = Slider(3, "لوازم الکتریکی",
                  "خرید ساده ارزان و مطمئن از ما",
                  "slider/h-2-05.jpg", "اطلاعات بیشتر", "/about")

    l = [obj, obj2, obj3]
    return HttpResponse(json.dumps(l, default=lambda o: o.__dict__), content_type='application/json')


@api_view()
def aboutdata(request):
    obj = about("درباره ما", "آنلاین شاپ حرفه ای ", "از سال 1401",
                "در خصوص کتاب، لوازم گیمینگ، لوازم ورزشی، آشپزی و ... نیاز شمارا فراهم میکنیم !!",
                "اطلاعات بیشتر",
                "/about",
                "about-2-bg22.jpg"
                )

    l = [obj]
    return HttpResponse(json.dumps(l, default=lambda o: o.__dict__), content_type='application/json')


@api_view()
def Testimonials(request):
    obj = testimo(1, "گیمینگ",
                  "کاربر 1", "testimonial/h-2-t-011.png"

                  )
    obj2 = testimo(2, "ورزشی",
                   "کاربر 2", "testimonial/h-2-t-02.png"
                   )
    obj3 = testimo(3, "پوشاک",
                   "کاربر 3", "testimonial/h-2-t-03.png"

                   )

    l = [obj, obj2, obj3]
    return HttpResponse(json.dumps(l, default=lambda o: o.__dict__), content_type='application/json')
