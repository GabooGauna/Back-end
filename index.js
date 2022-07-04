const express = require('express');
const Contenedor = require('./Contenedor.js')
const app = express();

const productos = new Contenedor('./productos.txt')

app.get('/productos', async (req, res) => {
     const product = await productos.getAll();
     res.send(product)
})

app.get('/productoRandom', async (req, res) => {
    const productRandom = await Math.random(productos);
    res.send(productRandom)
})

const port = 8080;

const server = app.listen(port, ()=>{
    console.log(`Servidor escuchando en el port: ${server.address().port}`)
})
server.on('error', error =>{
    console.log(`Error en el servidor: ${error}`)
})