from rest_framework import serializers
from . models import userinfo,userconfessions,confessionComments,confessionlikes

class userinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model= userinfo
        fields = '__all__'

class userconfessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model= userconfessions
        fields = '__all__'

class confessionCommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model= confessionComments
        fields = '__all__'

class confessionlikesSerializer(serializers.ModelSerializer):
    class Meta:
        model= confessionlikes
        fields = '__all__'

