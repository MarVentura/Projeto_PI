// Dependências
const Teams = require('./models/map');
const request = require('request');

module.exports = function(app) {

    app.get('/equipas', function(req, res) {
		console.log('entrou');
		Teams.find({},(err, equipas) => {
			if (err) {
				res.status(500).send('ERRO');
			} else {
				equipas.sort((a,b)=>{
					return new Date(b.date) - new Date(a.date);
				})
				var array = [];
				equipas.forEach((map)=>{
					array.push({
						id: map.id,
						nome: map.nome,
						Coach: map.Coach
					})
				})
				console.log('bla');
				console.log(equipas);
				res.status(200).send(array);
				console.log('entrou2');
			}
		});
	});

	app.post('/teste/:nome', function(req,res){
		let teams = {url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ req.params.nome +'?api_key=RGAPI-e5cc2ccf-6088-470f-84dc-7030efa78df2'}
	
		request(teams,(err, rres, body) => {                      
					res.send(rres);   
		})
	});








};