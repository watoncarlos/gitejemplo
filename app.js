const express = require('express');
const app =  express();

const puerto = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {titulo: 'mi titulo dinámico'})
})

app.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios: 'mi titulo dinámico'})
})

app.use((req, res, next) => {
    res.status(404).render("404")
})

app.listen(puerto, () => {
    console.log('servidor a su servicio', puerto)
})