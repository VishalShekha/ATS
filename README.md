Backend:

    docker run --name postgres -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
    docker exec -it postgres bash
    psql -U postgres
      CREATE DATABASE mydb;
      \c mydb
      \q
    exit
    TODO:Create the databases for all the masters(tables)

Frontend:

    https://mui.com/material-ui/all-components/
    1. Install and set up Git
    2. Install Node
    3. pull the project
