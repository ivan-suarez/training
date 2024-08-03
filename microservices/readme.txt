kubectl apply -f ./database/postgres-deploy.yml
kubectl apply -f ./main/deployment.yaml
kubectl apply -f ./main/service.yaml
kubectl apply -f ./side/side-deploy.yml
