from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request,'LL2.html')
# Create your views here.

def second(request):
    return render(request, 'index.html')