
const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const router = express.Router();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use('/loveit', require('./controllers/loveit'));
app.use('/leaveit', require('./controllers/leaveit'));

app.get('/', (req, res) =>{
    res.render('home');
});



app.listen(8000)

module.exports = router;


