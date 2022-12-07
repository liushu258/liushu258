# 公司电脑同步博客代码




# 公司电脑同步github代码

以前都是用svn的，github的同步还是不会啊

#### 下载hugo的expended插件

#### 安装GIT

#### 创建新的SSH，git设置

```
ls ~/.ssh/
检查id_rsa.pub 是否存在
ssh-keygen -t rsa -b 2048 -C "your_email@example.com"

```

#### 将SSH key添加到ssh-agent

先确认ssh-agent处于启用状态：
 `eval “$(ssh-agent -s)”`

输出类似于：

```
Agent pid 32070
```

然后将SSH key添加到ssh-agent：

```
ssh-add ~/.ssh/id_rsa
```

这时又会要你输入密码：

`Enter passphrase for /home/xxx/.ssh/id_rsa:`
 输入刚才记起来的密码，然后回车

#### 将SSH key添加到Github账户中

在新的文件夹中

git status  

git add . 

git commit -m "add yml file" 

git push



#### 新建库

```
1 git init()
2 git remote add origin https://github.com/username/xxxx.git
3 add
4 commit
5 push origin master
```

#### 已有的库：

```
1 git init                                            仓库名字
2 git remote add origin https://github.com/username/xxxx.git    //建立远程连接
3 $git fetch origin    //获取远程更新 
4 $git merge origin/master //把更新的内容合并到本地分支
5 git add . //加入差异的文件,就是本地修改的文件
6 commit  
7 git push origin master
8 输入账号和密码
————————————————
版权声明：本文为CSDN博主「sky_miange」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/sky_miange/article/details/68067989
```

```
Git克隆、拉取最新代码、上传代码到远程仓库参考文章：
https://blog.csdn.net/m0_45234510/article/details/120181503?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-120181503-blog-125799413.pc_relevant_vip_default&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-1-120181503-blog-125799413.pc_relevant_vip_default&utm_relevant_index=1
```


