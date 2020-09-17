import mongoose from 'mongoose'; //const mongoose = require('mongoose');

const url = "mongodb+srv://roserranoar:LTERZnhMCihksS1G@cluster0.xwpip.mongodb.net/test"; //cadena de conexion

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

