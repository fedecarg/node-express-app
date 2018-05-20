#!/bin/bash

# Name of the ECR
ECR_NAME="node-express-app"
# AWS Region that the ECS Cluster is in
ECS_REGION="eu-west-2"
# URI of the ECR
ECR_URI="283738126619.dkr.ecr.${ECS_REGION}.amazonaws.com"


# Login to AWS ECR
$(aws ecr get-login --no-include-email --region "${ECS_REGION}")

# Build an image from a Dockerfile
docker build -t ${ECR_NAME} .

# Tag the new Docker image to the remote repo
docker tag "${ECR_NAME}:latest" "${ECR_URI}/${ECR_NAME}:latest"

# Push to the remote ECR repo
docker push "${ECR_URI}/${ECR_NAME}:latest"
