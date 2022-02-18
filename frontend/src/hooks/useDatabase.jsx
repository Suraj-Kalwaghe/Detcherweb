import React from 'react';
import mysql from 'mysql2';

export const useDatabase = () => {
  const [data, setData] = React.useState({});

  // Main connection to our cloud DB instance.
  // Always use .env files to store sensitive information.
  const connection = mysql.createConnection({
    host: process.env.DB_TEST_HOST,
    user: process.env.DB_TEST_USERNAME,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_NAME,
  });

  React.useEffect(() => {
    connection.execute(
      'CREATE TABLE IF NOT EXISTS `test` (name VARCHAR(100), email VARCHAR(200), message VARCHAR(300))',
      (err, items) => {
        if (err) throw err;
        console.log('Created Table');
      }
    );
  });

  const handleDB = (method, jsonData) => {
    if (method === 'get') {
      try {
        connection.execute('SELECT * FROM test', (err, items) => {
          if (err) throw err;
          return items;
        });
      } catch (error) {
        console.error(error);
      }
    } else if (method === 'post') {
      try {
        connection.execute(
          'INSERT INTO test (name, email, message) VALUES (?,?,?)',
          [jsonData.name, jsonData.email, jsonData.message],
          (err, items) => {
            if (err) throw err;
            return items;
          }
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { handleDB };
};
