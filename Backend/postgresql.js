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
