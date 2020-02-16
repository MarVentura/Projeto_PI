// Dependências
var mongoose = require('mongoose');

var jogoSchema = new mongoose.Schema({
	equipa1 : String,
	equipa2: String,
    resultado: String,
    jogadores: Object,
    comentarios: Array
});

module.exports = mongoose.model('jogo',jogoSchema,'Jogos');