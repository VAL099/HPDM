## Steps to run
0. Create a dev postgres db in docker
1. Initialise prisma: `npx prisma generate`
2. EDIT docker-compose => set `DATABASE_URL`, `JWT_SECRET` for `backend` and environment variables for `citus-master` and `citus-worker`
3. RUN the project using: `run_cluster.bat`
4. CONFIG DB workers `config_cluster_db.bat`
5. Enjoy at `localhost/api`
