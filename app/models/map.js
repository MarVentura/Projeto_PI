// Dependências
var mongoose = require('mongoose');

module.exports = mongoose.model('Equipas', {
	id   : String,
	nome : String,
	jogadores: Array,
	Coach: String,
});