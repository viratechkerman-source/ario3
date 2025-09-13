FROM nginx:alpine

# Copy website files
COPY . /usr/share/nginx/html/

# Remove default nginx config and add custom config
RUN rm /etc/nginx/conf.d/default.conf

# Create custom nginx configuration
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 3000;
    server_name localhost;
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files \$uri \$uri/ /index.html;
        
        # Remove X-Frame-Options header to allow iframe embedding
        add_header X-Frame-Options "" always;
        
        # Enable gzip compression
        gzip on;
        gzip_types text/css application/javascript text/javascript application/json;
        
        # Cache static assets
        location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)\$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Security headers
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
}
EOF

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]