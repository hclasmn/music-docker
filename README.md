网易云 + QQ音乐 第三方 web端

可以通过访问 http://music.jsososo.com || http://y.jsososo.com 预览。

对于网易云没有版权的歌曲，采用粗暴的用歌名 + 歌手在qq音乐里进行搜索，生成链接。

ps: qq音乐那边是需要登录vip用户 cookie 才能获取到一些接口的数据，目前是我会不定时的去更新，有什么好的建议也欢迎告诉我或者提 pr，这个项目或者隔壁的QQMusicApi都可。
```
项目来源https://github.com/jsososo/NeteaseMusic docker化该项目
目前仍存在问题。部署后能登录，能搜索，但无法播放
部署时，需根据自己的IP修改对应文件.
```
反代例（可能有问题）
```
server {
    listen  80;
           server_name  域名;
    location / {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3080;
    }
    location /api/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3000/;
    }
    location /apiMix/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3600/;
    }
    location /apiQ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3300/;
    }
}
```
