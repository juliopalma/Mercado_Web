const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.use(express.static('static'));
app.use(express.static('assets'));
app.use(express.static('node_modules/bootstrap/dist'))

// configuramos el motor de templates (nunjucks)
nunjucks.configure('views', {
    express: app,
    autoescape: true
})

const frutas = [{
        nombre: 'banana',
        url: 'banana.png',
        precio: 200
    }, {
        nombre: 'cebollas',
        url: 'cebollas.png',
        precio: 100
    },
    {
        nombre: 'lechuga',
        url: 'lechuga.png',
        precio: 1000
    },
    {
        nombre: 'papas',
        url: 'papas.png',
        precio: 100
    },
    {
        nombre: 'pimenton',
        url: 'pimenton.png',
        precio: 200
    },
    {
        nombre: 'tomate',
        url: 'tomate.png',
        precio: 300
    }
]

app.get('/', async(req, res) => {

    res.render('index.html', {
        frutas: frutas
    })
});

app.listen(3010, () => console.log("Ejecutando en el puerto 3010"));