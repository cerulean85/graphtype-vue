- sudo apt install nginx

- sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/lots 
- sudo vim /etc/nginx/sites-available/lots 
=============================================
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name lots.kkennib.net;
        return 301 https://lots.kkennib.net;
}
=============================================
- sudo ln -s /etc/nginx/sites-available/lots /etc/nginx/sites-enabled/lots

- sudo vim /etc/nginx/sites-available/lots-ssl
=============================================
server {
        listen 443 ssl;
        server_name lots.kkennib.net;
        ssl_certificate /etc/letsencrypt/live/lots.kkennib.net/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/lots.kkennib.net/privkey.pem;

        location / {
                root /home/ubuntu/git/graphtype-vue/dist;
                index index.html;
                try_files $uri $uri/ /index.html;
        }
}
=============================================
- sudo ln -s /etc/nginx/sites-available/lots-ssl /etc/nginx/sites-enabled/lots-ssl

- sudo vim /etc/nginx/nginx.conf
=============================================
1번줄 => user www-data → ubuntu 로 변경
=============================================
- tail -f /var/log/nginx/error.log # 로그 확인

- sudo snap install --classic certbot
- sudo service stop nginx
- sudo certbot certonly --standalone -d lots.kkennib.net # nginx 내린 후 80포트가 닫힌 상태에서 진행해야 함
- sudo service start nginx

- sudo service start nginx
- sudo service stop nginx
- sudo service restart nginx

- sudo certbot certonly --standalone -d playbed.xyz
- certbot certonly --standalone -d lots.kkennib.net
- certbot certonly --standalone -d blog-rest.kkennib.net
 
- /etc/nginx/sites-available/vue-app
- /etc/nginx/sites-available/vue-app-ssl
- /etc/nginx/sites-available/blog-rest-ssl
- /etc/nginx/sites-enabled/vue-app
- /etc/nginx/sites-enabled/vue-app-ssl
- /etc/nginx/sites-enabled/blog-rest-ssl

- $ crontab -e # 이걸로 들어가서 아래를 입력해주자. 아래는 매월 1일 4시에 SSL 갱신
- 0 4 1 * * certbot renew --pre-hook "nginx -s stop"--post-hook "nginx"--renew-hook ="sudo systemctl restart nginx"

- pkill -9 -f nginx
- systemctl stop nginx
-  systemctl start nginx

- tail -f /var/log/nginx/access.log
- tail -f /var/log/nginx/error.log

- Github > Settings > Developer settings > Personal access tokens > Tokens(classic) > 
- Password 말썽 일으키면 위에서 새로 생성
- Username은 cerulean85