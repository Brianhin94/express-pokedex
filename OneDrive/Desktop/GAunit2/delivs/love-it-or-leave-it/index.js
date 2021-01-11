const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.use(layouts);


app.get('/', (req, res) => {
    res.send('home')
});

app.get('/animals', (req, res) => {
res.render('animals', { animals: ['wolf', 'alpacas', 'giraffe', 'quokkas', 'Capybara'] })
});

app.get('/foods', (req, res) => {
res.render('foods', { foods: ['Reuben Sambos', 'Watermellon', 'pizza', 'sushi'] })
});

app.get('/movies', (req, res) => {
res.render('movies', { movies: ['star wars', 'sans solier', 'assasins'] })
});

app.get('/products', (req, res) => {
res.render('products', { products: ['headphones'] })
});







app.listen(8000, () => console.log('port 8000'))

