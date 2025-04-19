// ! Entry point of our server

import express from 'express';
import { connectDB } from './config/db.js'; //* import the connectDB function from the db.js file
import dotenv from 'dotenv'; //* import dotenv to load environment variables from .env file

const app = express(); //* call express function to create an instance of express
dotenv.config(); //* load environment variables from .env file

app.post("/products", (req, res) => {}) //* if you want visit use post (routing)

app.listen(5000, () => {
    connectDB(); //* connect to the database
    console.log('Server started at http://localhost:5000');
})


// ? Application Programming Interface (API) or (Man in the Middle).
//? get, post, put, delete - is a set of rules and protocols for building and interacting with software applications. It defines the methods and data formats that applications can use to communicate with each other.
