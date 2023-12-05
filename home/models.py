from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
#more user information
class userinfo(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='ploads')
    phone_number = PhoneNumberField()
    date_of_birth = models.DateField()

#Users add confession stories
class userconfessions(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    image = models.ImageField(upload_to='uploads',null=True)
    date = models.DateTimeField(auto_now_add=True)
    confess= models.TextField()
    confession_approved = models.BooleanField(default=True)
#Users comment on confession posts
class confessionComments(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='users')
    comment = models.TextField()
    confession = models.ForeignKey(userconfessions,on_delete=models.CASCADE,related_name='userconfessions')
    date = models.DateTimeField(auto_now_add=True)

#counts the likes and dislikes of a given confession
class confessionlikes(models.Model):
    confession = models.ForeignKey(userconfessions,on_delete=models.CASCADE,related_name='userconfessionlikes')
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='usersinuserconfessionlikes')


