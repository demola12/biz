from django.urls import path

from v1.view.process import ProcessPositionUpdateView, SaveProcessView
from .view.step import StepDoneView
from .view.auth import RegisterView,LoginView,GetUserDetails,ExampleView
from .view.department import DepartmentView
urlpatterns = [ 
    path('auth/register', RegisterView.as_view()),
    path('auth/login', LoginView.as_view()),
    path('auth/user', GetUserDetails.as_view()),
    path('view/department', DepartmentView.as_view()),
    path('view/stepdone', StepDoneView.as_view()),
    path('view/saveprocess', SaveProcessView.as_view()),
    path('view/processpositionupdate', ProcessPositionUpdateView.as_view()),
    path('auth/example', ExampleView.as_view()),
    
]