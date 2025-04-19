// ! Entry point of our server

import express from 'express';

const app = express(); //* call express function to create an instance of express

app.get("/", (req, res) => { 
  res.send("Server is Ready");
})

app.listen(5000, () => { 
    console.log('Server started at http://localhost:5000 hello');
})


