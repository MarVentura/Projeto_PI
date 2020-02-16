// Importação módulos necessários
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
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
const uri = "mongodb+srv://admin:admin@cluster0-nbwfa.mongodb.net/RiotDB?retryWrites=true&w=majority";
const options = {useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  }
mongoose.connect(uri,options).then(() => {
console.log("Conectado ao MongoDB");
}).catch((err) => {
    console.log("Não Conectado ao MongoDB", err);
});


// Roteamento
require('./app/router')(app);

// Inicio do express à escuta na porta 4000
app.listen(4000, function () {
    console.log("Server running at http://localhost:4000");});

exports = module.exports = app;

