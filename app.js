const Product = require('./objects/product.class');
const Contenedor = require('./objects/Contenedor.class');

const express = require('express');
const app = express();

let cont = new Contenedor("products.json");

app.listen(3000,()=>{
    console.log("server corriendo pa");
})

app.get('/productos',(req, res)=>{
    const prods = cont.getAll();
    return res.status(200).json(prods);
})

app.get('/productoRandom',(req, res)=>{
    const prods = cont.getRandomProd();
    return res.status(200).json(prods);
})








