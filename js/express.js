const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => 
{
    res.render('index.pug', { title: 'index.pug' });
});

app.use(express.static('public'));

app.listen(port, () => 
{
    console.log(`Example app listening on port ${port}`);
});