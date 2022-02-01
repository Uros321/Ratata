var mysql = require('mysql2');
var ejs = require('ejs');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // So secure way to do this
    password: 'root',
    database: 'frizeraj'
});

var express = require('express');
var app = express();

app.use(express.static('views'));
app.set('view engine', 'ejs');
connection.connect();


app.get('/', (req, res) => {
    connection.query('SELECT * from termin', function (err, rows, fields) {
        if (err) throw err;
        res.render('index', { REZULTAT: rows });
    });
    
});

app.get('/termin', (req, res) => {
    connection.query('SELECT * from termin', function (err, rows, fields) {
        if (err) throw err;
        res.render('termin', { REZULTAT: rows });
    });
    
});

app.get('/utorak', (req, res) => {
    connection.query('SELECT * from termin where dan = "Utorak"', function (err, rows, fields) {
        if (err) throw err;
        res.render('utorak', { REZULTAT: rows });
    });
    
});
    
app.listen(3000);
//connection.end();
