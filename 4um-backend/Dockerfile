FROM openjdk:11-jre-slim-stretch

ARG JAR_FILE

# mount container /tmp to host /var/lib/docker (or whatever is set on runtime)
# /tmp is the default working directory for Tomcat in Sprint Boot application
VOLUME /tmp

WORKDIR /app

EXPOSE 8080

COPY docker /
COPY target/lib /app/lib
COPY target/${JAR_FILE} /app/4um-backend.jar

RUN touch /app/4um-backend.jar && \
    chmod a+x /docker-entrypoint.sh && \
    chmod a+x /usr/bin/4um-backend

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["4um-backend"]