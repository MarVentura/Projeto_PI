// Dependências
var mongoose = require('mongoose');

var equipaSchema = new mongoose.Schema({
	id   : String,
	nome : String,
	jogadores: Array,
	Coach: String
});

module.exports = mongoose.model('equipa',equipaSchema,'Equipas');