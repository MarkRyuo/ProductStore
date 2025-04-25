// ! Entry point of our server

import express from 'express';
import { connectDB } from './config/db.js'; //* import the connectDB function from the db.js file
import dotenv from 'dotenv'; //* import dotenv to load environment variables from .env file
import Product from './models/product.model.js';

const app = express(); //* call express function to create an instance of express
dotenv.config(); //* load environment variables from .env file

app.use(express.json()); //* allows us to accept JSON data in the body (middleware)

app.post("/api/products", async (req, res) => {
  const product = req.body; //* user will send this data 

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "Please fill all the fields" }); //* if any field is empty return 400 status code
  }

  const newProduct = new Product(product); //* create a new product using the Product model

  try {
    await newProduct.save(); //* save the product to the database
    res.status(201).json({ success: true, data: newProduct }); //* return 201 status code and the product data
  } catch (error) {
    console.error("Error in create product: ", error);
    res.status(500).json({ success: false, message: "Server Error" }); //* return 500 status code if there is an error
  }
}) //* - if you want visit use post (routing) && - Add async function to handle the request and response



app.get("/", (req, res) => {
  console.log("SERVER IS RUNNING"); 
}); //* use get method to get the response from the server

app.listen(5000, () => {
    connectDB(); //* connect to the database
    console.log('Server started at http://localhost:5000');
})


// ? Application Programming Interface (API) or (Man in the Middle).
//? get, post, put, delete - is a set of rules and protocols for building and interacting with software applications. It defines the methods and data formats that applications can use to communicate with each other.



























