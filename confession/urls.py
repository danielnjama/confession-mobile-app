from django.contrib import admin
from django.urls import path
from home import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('userinfo/',views.userinfoList.as_view()),
    path('userinfo/<int:pk>',views.userinfoDetail.as_view()),
    path('userconfessions/',views.userconfessionsList.as_view()),
    path('userconfessions/<int:pk>',views.userconfessionsDetail.as_view()),
    path('confessioncomments/',views.confessioncommentsList.as_view()),
    path('confessioncomments/<int:pk>',views.confessioncommentsDetail.as_view()),
    path('confessionlikes/',views.confessionlikesList.as_view()),
    path('confessionlikes/<int:pk>',views.confessionlikesDetail.as_view()),
]