// Dependências
var mongoose = require('mongoose');

var metaSchema = new mongoose.Schema({
	nome : String,
	tier: String,
    role: String,
});

module.exports = mongoose.model('meta',metaSchema,'Meta');