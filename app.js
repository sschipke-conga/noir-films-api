import express from 'express';
import cors from 'cors';
const environment = process.env.NODE_ENV || 'development';
import movies from './routes/api/v1/movies';
import auth from './routes/api/v1/auth';
const configuration = require('./knexfile')[environment];
export const database = require('knex')(configuration);

if (environment === 'development' || environment === 'test') {
  require('dotenv').config();
};

const app = express();
app.use(express.json());

app.locals.title = 'Noir Films API';

if(environment === 'development' || 'test') {
  app.use(cors('*'));
  console.log("Environment: ", environment)
} else {
  console.log("Production has initiated.")
}

app.use("/api/v1/movies", movies);
app.use("/api/v1/auth", auth);


export default app;
