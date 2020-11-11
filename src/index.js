const express = require('express');
const app = express();
const morgan = require('morgan');

//Configure

app.set('port',3000);


//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Start server

app.listen(3000,() =>{
console.log("Server");
});