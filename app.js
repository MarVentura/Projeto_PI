// Importação módulos necessários
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const requestHandlers = require("./request-handlers");

// Configurações do express
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));

// Definição estátitica, fornece as páginas HTML tal como estão na pasta www
app.use(express.static('www'));

// Inicio do express à escuta na porta 4000
app.listen(4000, function () {
    console.log("Server running at http://localhost:4000");});