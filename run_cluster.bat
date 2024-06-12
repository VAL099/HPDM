@echo off
set replicas=7
set /A citus_replicas=replicas/2
set /A nginx_replicas=replicas/2


docker-compose up -d --scale backend=%replicas% --scale citus_worker=%citus_replicas% --scale nginx=%nginx_replicas% --remove-orphans
