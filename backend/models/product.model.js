import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  }, 
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, //* createAt and updatedAt fields on each document
});


const Product = mongoose.model("Product", productSchema); //* Create a model called Product using the productSchema

export default Product; //* Export the Product model