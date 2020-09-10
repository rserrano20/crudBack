import express from 'express';
//const express = require("express")
import morgan from 'morgan'; // const morgan = require("morgan");
import cors from 'cors'; // const cors = require('cors');
import path from 'path'; //const path = require('path');

//settings
import './database';

const app = express(); //instanciar a express

app.set('port', process.env.PORT || 4000); //nos creamos un puerto

app.listen( app.get('port'), () =>{
    console.log(path.join(__dirname,'../public'))
    console.log("Estoy escuchando el puerto "+ app.get('port'));
})

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json()); // me permiten entender el formato json
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public'))); //pone la carpeta publi como publica


//crear una ruta
app.get('/', (req, res) =>{
    res.send("hola comision 7d")
})