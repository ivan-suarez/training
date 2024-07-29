docker build -t my-postgres .
docker run -e POSTGRES_PASSWORD=123456 -p 5432:5432 my-postgres
