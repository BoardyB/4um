FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/4um-frontend .

# Copy the EntryPoint
COPY ./docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh


ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
