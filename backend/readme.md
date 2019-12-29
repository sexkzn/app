Для запуска бэка нужно:

* Качнуть и установить последнюю версию [maven](https://maven.apache.org/download.cgi)
* Качнуть и установить последнюю версию [postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
* Через pgAdmin создать базу с названием demo
* Качнуть и установить [java 13](https://www.oracle.com/technetwork/java/javase/downloads/index.html)

Выполнить
```
cd {PROJECT_ROOT}/backend
mvn clean install -DskipTests
cd ./target
java -jar app.jar
```