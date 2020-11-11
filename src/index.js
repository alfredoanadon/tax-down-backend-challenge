const express = require('express');
const app = express();
const morgan = require('morgan');

//Configure

app.set('port',3000);


//middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
/*app.get('/',(req,res) =>{
    res.send('hola')
});*/
app.use(require('./routes'));
app.use('/api/webb',require('./routes'));



//Start server

app.listen(3001,() =>{
console.log("Server");
});