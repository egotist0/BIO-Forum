from django.contrib import admin

# Register your models here.
from app01.models import UserInfo,  Category,  Article, ArticleDetail,  ArticleUpDown, Comment

admin.site.register(UserInfo)
admin.site.register(Category)
admin.site.register(Article)
admin.site.register(ArticleDetail)
admin.site.register(ArticleUpDown)
admin.site.register(Comment)
