from django.shortcuts import render
from . models import userinfo,userconfessions,confessionComments,confessionlikes
from . serializers import userinfoSerializer, userconfessionsSerializer,confessionCommentsSerializer,confessionlikesSerializer
from rest_framework import generics
# from rest_framework.authentication import BasicAuthentication
# from rest_framework.permissions import IsAuthenticated

#userinfo views
class userinfoList(generics.ListCreateAPIView):
    queryset = userinfo.objects.all()
    serializer_class= userinfoSerializer
    

class userinfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = userinfo.objects.all()
    serializer_class= userinfoSerializer
    
#userconfession views
class userconfessionsList(generics.ListCreateAPIView):
    queryset = userconfessions.objects.all()
    serializer_class= userconfessionsSerializer
    

class userconfessionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = userconfessions.objects.all()
    serializer_class= userconfessionsSerializer

#confession comments
class confessioncommentsList(generics.ListCreateAPIView):
    queryset = confessionComments.objects.all()
    serializer_class= confessionCommentsSerializer
    

class confessioncommentsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = confessionComments.objects.all()
    serializer_class= confessionCommentsSerializer

#confessionlikes views
class confessionlikesList(generics.ListCreateAPIView):
    queryset = confessionlikes.objects.all()
    serializer_class= confessionlikesSerializer
    

class confessionlikesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = confessionlikes.objects.all()
    serializer_class= confessionlikesSerializer