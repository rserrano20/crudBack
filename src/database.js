import mongoose from 'mongoose'; //const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/cafeteria"; //cadena de conexion

mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log("BD conectada")
})

