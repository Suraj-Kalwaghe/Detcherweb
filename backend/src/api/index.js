const express = require('express');
const Joi = require('joi');
const mysql = require('mysql2');

const router = express.Router();

// Main connection to our cloud DB instance.
// Always use .env files to store sensitive information.
const connection = mysql.createConnection({
  host: process.env.DB_TEST_HOST,
  user: process.env.DB_TEST_USERNAME,
  password: process.env.DB_TEST_PASSWORD,
  database: process.env.DB_TEST_NAME,
});

// Validation of the recieved data from client is handled here.
const schema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  message: Joi.string().trim().required(),
});

// Creating table if doesn't exist in cloud server DB.
connection.execute(
  'CREATE TABLE IF NOT EXISTS `test` (name VARCHAR(100), email VARCHAR(200), message VARCHAR(300))',
  (err, items) => {
    if (err) throw err;
    console.log('Created Table');
  }
);

router.get('/', async (req, res, next) => {
  try {
    connection.execute('SELECT * FROM test', (err, items) => {
      if (err) throw err;
      res.json(items);
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    connection.execute(
      'INSERT INTO test (name, email, message) VALUES (?,?,?)',
      [value.name, value.email, value.message],
      (err, items) => {
        if (err) next(err);
        res.json(items);
      }
    );
  } catch (error) {
    next(error);
  }
});

module.exports = router;
