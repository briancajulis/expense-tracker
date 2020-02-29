const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors'); // adds color to console (not needed)
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions');

const app = express();

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
