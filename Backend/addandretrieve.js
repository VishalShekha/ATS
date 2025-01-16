const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',  // Use the container's IP address here
  database: 'mydb',
  password: 'root',
  port: 5432,
});


async function main() {
    // Connect to the PostgreSQL database
    client.connect()
      .then(() => console.log('Connected to PostgreSQL'))
      .catch(err => console.error('Connection error', err.stack));
  
    try {
      // const insertQuery = ``;
  
      // // Execute the insert query
      // const res = await client.query(insertQuery);
  
      // Retrieve and print all data from 'user'
      const selectQuery = 'SELECT * FROM "industry_master"';
      const selectRes = await client.query(selectQuery);
      
      console.log('All records in user table:');
      console.table(selectRes.rows);
      // console.log(typeof(selectRes));
      // console.log(selectRes);

      
    } catch (err) {
      console.error('Error executing query', err.stack);
    } finally {
      // Close the database connection
      await client.end();
    }
  }
  
  main();