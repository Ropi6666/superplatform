#!/bin/bash

docker run --name mypostgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_DB=mydatabase -p 5432:5432 -d postgres

SINGULATRON_DB=postgres \
SINGULATRON_DB_DEBUG=true \
SINGULATRON_DB_SQL_CONNECTION_STRING="postgres://postgres:mysecretpassword@localhost:5432/mydatabase?sslmode=disable" \
go test ./... -tags=dist -timeout=30s