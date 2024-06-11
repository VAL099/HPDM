@echo off
set replicas=7

docker-compose up -d --scale backend=%replicas% --scale citus_worker=%replicas% --remove-orphans
