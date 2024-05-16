FROM --platform=arm64 amazoncorretto:17-alpine-jdk
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]