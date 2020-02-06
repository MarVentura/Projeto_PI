// Dependências
const Teams =  require('./models/map');
const request = require('request');
module.exports = function(app) {

    app.get('/equipas', function(req, res) {
		Teams.find({},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				console.log(result);
				res.status(200).send(result);
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