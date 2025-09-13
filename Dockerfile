FROM nginx:alpine

# Copy website files
COPY . /usr/share/nginx/html/

# Remove default nginx config and add custom config
RUN rm /etc/nginx/conf.d/default.conf

# Create custom nginx configuration
RUN echo 'server {' > /etc/nginx/conf.d/default.conf && \
    echo '    listen 3000;' >> /etc/nginx/conf.d/default.conf && \
    echo '    server_name localhost;' >> /etc/nginx/conf.d/default.conf && \
    echo '' >> /etc/nginx/conf.d/default.conf && \
    echo '    # Remove X-Frame-Options header to allow iframe embedding' >> /etc/nginx/conf.d/default.conf && \
    echo '    add_header X-Frame-Options "" always;' >> /etc/nginx/conf.d/default.conf && \
    echo '' >> /etc/nginx/conf.d/default.conf && \
    echo '    location / {' >> /etc/nginx/conf.d/default.conf && \
    echo '        root /usr/share/nginx/html;' >> /etc/nginx/conf.d/default.conf && \
    echo '        index index.html index.htm;' >> /etc/nginx/conf.d/default.conf && \
    echo '        try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf && \
    echo '' >> /etc/nginx/conf.d/default.conf && \
    echo '        # Enable gzip compression' >> /etc/nginx/conf.d/default.conf && \
    echo '        gzip on;' >> /etc/nginx/conf.d/default.conf && \
    echo '        gzip_types text/css application/javascript text/javascript application/json;' >> /etc/nginx/conf.d/default.conf && \
    echo '' >> /etc/nginx/conf.d/default.conf && \
    echo '        # Cache static assets' >> /etc/nginx/conf.d/default.conf && \
    echo '        location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {' >> /etc/nginx/conf.d/default.conf && \
    echo '            expires 1y;' >> /etc/nginx/conf.d/default.conf && \
    echo '            add_header Cache-Control "public, immutable";' >> /etc/nginx/conf.d/default.conf && \
    echo '        }' >> /etc/nginx/conf.d/default.conf && \
    echo '    }' >> /etc/nginx/conf.d/default.conf && \
    echo '' >> /etc/nginx/conf.d/default.conf && \
    echo '    # Security headers' >> /etc/nginx/conf.d/default.conf && \
    echo '    add_header X-Content-Type-Options nosniff;' >> /etc/nginx/conf.d/default.conf && \
    echo '    add_header X-XSS-Protection "1; mode=block";' >> /etc/nginx/conf.d/default.conf && \
    echo '    add_header Referrer-Policy "strict-origin-when-cross-origin";' >> /etc/nginx/conf.d/default.conf && \
    echo '}' >> /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]