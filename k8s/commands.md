Create secret for registry authentication 

    kubectl create secret docker-registry regcred \
    --docker-server=<registory-here>.azurecr.io \
    --docker-username=copy-here-the-azure-service-principal-appId \
    --docker-password=copy-here-the-azure-service-principal-password