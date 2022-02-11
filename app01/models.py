from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

# 扩展内置的auth_user表
class UserInfo(AbstractUser):
    """
    扩展内置auth_user表
    nid UserInfo自增列
    avatar 扩展项头像 默认图片 "photo/default.png"
    create_time 扩展项创建时间
    blog 扩展项外键 一对一关联 博客内容

    """
    uid = models.AutoField(primary_key=True)
    avatar = models.FileField(upload_to="photo/", default="photo/default.png")
    create_time = models.DateTimeField(auto_now_add=True)
    # blog = models.OneToOneField(to="Blog", to_field="bid", on_delete=models.CASCADE)


# class Blog(models.Model):
#     """
#     博客信息表
#     bid Blog自增列
#
#     """
#     bid = models.AutoField(primary_key=True)
#     title = models.CharField(max_length=64, null=False)
#
#     # site = models.CharField(max_length=32, unique=True)
#     # theme = models.CharField(max_length=32)
#
#     class Meta:
#         verbose_name = "博客信息表"
#         verbose_name_plural = verbose_name


class Category(models.Model):
    """
    个人博客文章分类
    cid Category自增列
    title 分类标题 #最大不能超过32位
    blog 外键关联项 一对多关系 一个博客站点可以有多个分类

    """
    cid = models.AutoField(primary_key=True)
    title = models.CharField(max_length=32)
    user = models.ForeignKey(to="UserInfo", to_field="uid", on_delete=models.CASCADE)

    class Meta:
        verbose_name = "个人博客分类"
        verbose_name_plural = verbose_name




class Article(models.Model):
    """
    文章
    aid Article自增列
    title 文章标题 #最大不能超过50
    desc 文章描述 #最大不能超过255
    create_time 创建时间
    category 与个人文章分类外键关联 #不能为空
    user 与 扩展后的UserInfo表 外键关联
    # tags 与标签多对多关联(手动创建第三张表需要设置through,以及through_fields 需要注意顺序
    # 创建多对多关系的关联字段写在前面)
    comment_count 评论数 当评论表关联文章update数据
    up_count 点赞数 当关联文章点赞后 update数据
    down_count 踩数 当关联文章被踩后 update数据

    """
    aid = models.AutoField(primary_key=True)

    title = models.CharField(max_length=25)
    desc = models.CharField(max_length=100)
    create_time = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(to="Category", to_field="cid",blank=False, on_delete=models.CASCADE)
    user = models.ForeignKey(to="UserInfo", to_field="uid", on_delete=models.CASCADE)
    # tags = models.ManyToManyField(
    #     to="Tag", through="Article2Tag", through_fields=("article", "tag")
    # )
    comment_count = models.IntegerField(default=0)
    up_count = models.IntegerField(default=0)
    down_count = models.IntegerField(default=0)

    class Meta:
        verbose_name = "文章表"
        verbose_name_plural = verbose_name


class ArticleDetail(models.Model):
    """
    文章详情表
    aid ArticleDetail自增列
    content 文章内容
    article 与文章表创建一对一关系

    """
    aid = models.AutoField(primary_key=True)
    content = models.TextField()
    article = models.OneToOneField(to="Article", to_field="aid", on_delete=models.CASCADE)

    class Meta:
        verbose_name = "文章详情表"
        verbose_name_plural = verbose_name



class ArticleUpDown(models.Model):
    """
    点赞表
    aid ArticleUpDown自增列
    user 与UserInfo外键关联
    article 与文章外键关联
    is_up bool类型 是否赞
    """
    aid = models.AutoField(primary_key=True)
    user = models.ForeignKey(to="UserInfo", null=True, on_delete=models.CASCADE)
    article = models.ForeignKey(to="Article", null=True, on_delete=models.CASCADE)
    is_up = models.BooleanField(default=True)

    class Meta:
        verbose_name = "点赞表"
        verbose_name_plural = verbose_name
        unique_together = ("user", "article")


class Comment(models.Model):
    """
    评论表
    cid Comment自增列
    article 与文章外键关联
    user 与UserInf   o外键关联
    content 评论内容 #最大不能超过255
    create_time 评论时间
    parent_comment 自评论 外键关联自己本身 不能为空
    """
    cid = models.AutoField(primary_key=True)
    article = models.ForeignKey(to="Article", to_field="aid", on_delete=models.CASCADE)
    user = models.ForeignKey(to="UserInfo", to_field="uid", on_delete=models.CASCADE)
    content = models.CharField(max_length=255)
    create_time = models.DateTimeField(auto_now_add=True)
    parent_comment = models.ForeignKey("self", null=True, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "评论表"
        verbose_name_plural = verbose_name
