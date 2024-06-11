@echo off
set replicas=7

docker exec -it citus_master psql -U postgres -d hpdm_db -c "SELECT create_distributed_table('logs', 'id');"

docker exec -it citus_master psql -U postgres -d hpdm_db -c "SELECT citus_set_coordinator_host('127.0.0.1', 5432);"

for /L %%i in (1,1,%replicas%) do (
    docker exec -it citus_master psql -U postgres -d hpdm_db -c "SELECT citus_add_node('hpdm-citus_worker-%%i', 5432);"
)

docker exec -it citus_master psql -U postgres -d hpdm_db -c "SELECT rebalance_table_shards();"
