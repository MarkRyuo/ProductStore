// ! Entry point of our server

import express from 'express';

const app = express();

app.listen(5000, (req, res) => { 
    console.log('Server started at http://localhost:5000');
})
