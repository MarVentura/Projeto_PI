// Dependências
var mongoose = require('mongoose');

module.exports = mongoose.model('Map', {
	id   : String,
	nome : String,
	jogadores: Array,
	Coach: String,
});