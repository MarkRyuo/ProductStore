// ! Entry point of our server

import express from 'express';

const app = express(); //* call express function to create an instance of express
dotenv.config();

app.get("/products", (req, res) => { 
  res.send("Server is Ready");
})

app.listen(5000, () => { 
    console.log('Server started at http://localhost:5000');
})

//* Ze8AFppuTRUOf8MG

console.log(proess.env.MONGO_URI);
