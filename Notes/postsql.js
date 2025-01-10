const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',  // Use the container's IP address here
  database: 'mydb',
  password: 'root',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));


  /*
  docker run --name postgres -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
  docker exec -it postgres bash
  psql -U postgres
    CREATE DATABASE mydb;
    \c mydb
    \q
  exit
  TODO:Create the databases for all the masters(tables)
  */