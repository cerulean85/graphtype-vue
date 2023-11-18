- sudo service start nginx
- sudo service stop nginx
- sudo service restart nginx

- certbot certonly --standalone -d blog.kkennib.net
- certbot certonly --standalone -d blog-rest.kkennib.net
 
- /etc/nginx/sites-available/vue-app
- /etc/nginx/sites-available/vue-app-ssl
- /etc/nginx/sites-available/blog-rest-ssl
- /etc/nginx/sites-enabled/vue-app
- /etc/nginx/sites-enabled/vue-app-ssl
- /etc/nginx/sites-enabled/blog-rest-ssl

- $ crontab -e # 이걸로 들어가서 아래를 입력해주자. 아래는 매월 1일 4시에 SSL 갱신
- 0 4 1 * * certbot renew --pre-hook "nginx -s stop"--post-hook "nginx"--renew-hook ="sudo systemctl restart nginx"
-  자동 갱신이 되어도 간혹 php-fpm이 종료되지 않아 인증오류에 인해 통신이 제대로 안 될 수 있음. 따라서 아래 명령어를 입력하여 nginx 프로세스를 모두 죽인 후에 재실행할 것


- pkill -9 -f nginx
- systemctl stop nginx
-  systemctl start nginx

- tail -f /var/log/nginx/access.log
- tail -f /var/log/nginx/error.log

- Github > Settings > Developer settings > Personal access tokens > Tokens(classic) > 
- Password 말썽 일으키면 위에서 새로 생성
- Username은 cerulean85