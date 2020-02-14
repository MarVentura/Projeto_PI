// Dependências
const Teams =  require('./models/map');
const request = require('request');
module.exports = function(app) {

    app.get('/equipas', function(req, res) {
		Teams.find({},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		});
	});

	app.post('/teste/:nome', function(req,res){
		let teams = {url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ req.params.nome +'?api_key=RGAPI-01ea554c-01c1-44cf-8179-2f323bc39709'}
	
		request(teams,(err, rres, body) => {                      
					res.send(rres);   
		})
	});

};