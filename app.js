// Importação módulos necessários
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require('request');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
//const requestHandlers = require("./request-handlers");

// Ficheiros
const router = require('./app/router');


// Configurações do express
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));

// Definição estátitica, fornece as páginas HTML tal como estão na pasta www
app.use(express.static('www'));


// Ligar à base de dados MongoDB
const connectionString = `mongodb+srv://admin:<password>@cluster0-nbwfa.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('Conectado ao MongoDB');
	}
});



app.post('/teste/:nome', function(req,res){
    let teams = {url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ req.params.nome +'?api_key=RGAPI-f48e3b63-6bbe-4060-b555-2080fcf761c4'}

    request(teams,(err, rres, body) => {                      
                res.send(rres);   
    })
});

// Roteamento
require('./app/router')(app);

// Inicio do express à escuta na porta 4000
app.listen(4000, function () {
    console.log("Server running at http://localhost:4000");});

exports = module.exports = app;

