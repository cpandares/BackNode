const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors')
require('dotenv').config();

const app  = express();

/* CORS */
app.use(cors());

/* lectura y parseo */

app.use(express.json());

//DbConeection
dbConnection();

/* Rutas */
app.use('/api/users', require('./routes/users'));


app.listen(4000, ()=>{
    console.log('Hola server on', process.env.PORT)
})


/* 
MF74J8NaYJdzR6nz
rootUser

mongodb+srv://rootUser:j0qFbnbENXjBiC1Z@cluster0.radoinz.mongodb.net/test
*/