import json

from rest_framework.decorators import api_view
from django.http import HttpResponse

from model.Sliderdatas import Slider
from model.about import about
from model.testimonials import testimo


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


@api_view()
def aboutdata(request):
    obj = about("درباره ما", "ما کسب و کار شما را به یک کسب و کار حرفه ای تبدیل می کنیم", "از سال 1390",
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
                "اطلاعات بیشتر",
                "/about",
                "about-2.jpg"
                )

    l = [obj]
    return HttpResponse(json.dumps(l, default=lambda o: o.__dict__), content_type='application/json')


@api_view()
def Testimonials(request):
    obj = testimo(1, "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                  "کاربر 1", "testimonial/h-2-t-01.png"

                  )
    obj2 = testimo(2, "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                   "کاربر 2", "testimonial/h-2-t-02.png"
                   )
    obj3 = testimo(3, "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                   "کاربر 3", "testimonial/h-2-t-03.png"

                   )

    l = [obj, obj2, obj3]
    return HttpResponse(json.dumps(l, default=lambda o: o.__dict__), content_type='application/json')
