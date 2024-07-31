curl -X POST http://localhost:8080/api/products -H "Content-Type: application/json" -d "{\"name\": \"New Product\", \"price\": 20.50}"

curl -X GET http://localhost:8080/api/products

curl -X GET http://localhost:8080/api/products/1

curl -X PUT http://localhost:8080/api/products/1 -H "Content-Type: application/json" -d "{\"name\": \"Updated Product\", \"price\": 25.00}"

curl -X DELETE http://localhost:8080/api/products/1


docker build -t spring-app .
docker tag spring-app:latest ivansuarez/spring-app:latest
docker push ivansuarez/spring-app:latest