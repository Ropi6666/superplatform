---
sidebar_position: 110
tags:
  - docker-svc
  - docker
  - containers
  - services
---

# Docker Svc

The docker service maintains containers on a node. It expects the docker socket to be mounted.

For simplicity the Docker Svc is only concerned with the node it resides on. In other words, the Docker Svc is not distributed, it only starts and stops containers locally.

## Used By

- [Model Svc](/docs/built-in-services/download-svc) to launch containers running AI models.
- [Deploy Svc](/docs/built-in-services/download-svc) to launch containers to deploy service instances.

> This page is a high level overview of the `Docker Svc`. For more details, please see the [Docker Svc API documentation](/docs/openorch/run-container).

## Responsibilities

- Start and stop containers when needed - ensuring the running containers match what is expected.

## Dependencies

- [Download Svc](/docs/built-in-services/download-svc) to get the local file path of the model from the asset URL

## Current Limitations

- Service expects to run on the same node as the Download Svc. This is an issue in distributed setups.
