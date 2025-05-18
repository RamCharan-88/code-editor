from django.urls import path
from .views import CodeExecuteView

urlpatterns = [
    path("run/", CodeExecuteView.as_view()),
]
