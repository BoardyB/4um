FROM openjdk:11-jre-slim-stretch

ARG JAR_FILE

# mount container /tmp to host /var/lib/docker (or whatever is set on runtime)
# /tmp is the default working directory for Tomcat in Sprint Boot application
VOLUME /tmp

WORKDIR /app

EXPOSE 8080

COPY target/lib /app/lib
COPY target/${JAR_FILE} /app/4um-backend.jar

ENTRYPOINT ["java", "-jar", "/app/4um-backend.jar"]