// Dependências
var mongoose = require('mongoose');

var jogadorSchema = new mongoose.Schema({
	nome : String,
	role: String,
	LP: Number
});

module.exports = mongoose.model('jogador',jogadorSchema,'Jogadores');