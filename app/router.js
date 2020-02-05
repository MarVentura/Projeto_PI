// Dependências
const Map = require('./models/map');

module.exports = function(app) {

    app.get('/maps', function(req, res) {
		Map.find((err, maps) => {
			if (err) {
				res.status(400).send();
			} else {
				var array = [];
				maps.forEach((map)=>{
					array.push({
						id: map.key,
						nome: map.nome,
						jogadores: map.jogadores,
						Coach: map.Coach
					})
				})
				res.status(200).send(array);
			}
		});
	});










};