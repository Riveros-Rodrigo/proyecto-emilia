const express = require('express');
const path = require('path');

const app = express()//express ejecutado
const PORT = 3030;

app.use(express.static('public')) //ruteo los recursos estaticos

/* RUTAS */
app.get('/',(req,res) =>res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/about',(req,res) =>res.sendFile(path.join(__dirname,'views','about.html')))
app.get('/contact',(req,res) =>res.sendFile(path.join(__dirname,'views','contact.html')))
app.get('/music',(req,res) =>res.sendFile(path.join(__dirname,'views','music.html')))
app.get('/*',(req,res) => res.sendFile(path.join(__dirname,'views','404.html'))) //El * es para agarrar todas las rutas si hay una que no es las que tengo me sale el error 404

app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));

