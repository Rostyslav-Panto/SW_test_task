from django.http import HttpResponse
from django.views import View


class UserView(View):
    def get(self, request):
        return HttpResponse("OK")

    def post(self,request):
        pass

    def put(self, request):
        pass

    def delete(self, request):
        pass

class GroupView(View):
    def get(self, request):
        return HttpResponse("OK")

    def post(self, request):
        pass

    def put(self, request):
        pass

    def delete(self, request):
        pass
