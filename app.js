// Importação módulos necessários
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require('request');
//const requestHandlers = require("./request-handlers");

// Configurações do express
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(bodyParser.urlencoded({ extended: false }));

// Definição estátitica, fornece as páginas HTML tal como estão na pasta www
app.use(express.static('www'));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:1234@cluster0-nbwfa.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useUnifiedTopology: true, useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.post('/teste/:nome', function(req,res){
    let teams = {url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ req.params.nome +'?api_key=RGAPI-f48e3b63-6bbe-4060-b555-2080fcf761c4'}

    request(teams,(err, rres, body) => {                      
                res.send(rres);   
    })
});

// Inicio do express à escuta na porta 4000
app.listen(4000, function () {
    console.log("Server running at http://localhost:4000");});