// ! Entry point of our server

import express from 'express';

const app = express(); //* call express function to create an instance of express

app.listen(5000, (req, res) => { 
    console.log('Server started at http://localhost:5000');
})


