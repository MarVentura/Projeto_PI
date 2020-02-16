// Dependências
const Teams =  require('./models/equipasMap');
const Players =  require('./models/jogadoresMap');
const Games =  require('./models/jogosMap');
const Meta = require('./models/metaMap');
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

	app.get('/jogadores', function(req, res) {
		Players.find({},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		});
	});

	app.get('/jogos', function(req, res) {
		Games.find({},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		});
	});

	app.get('/meta', function(req, res) {
		Meta.find({},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		});
	});

	app.get('/jogTOP1', function(req, res) {
		Players.find({role:"TOP"},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		}).sort({LP:-1});
	});

	app.get('/jogJGL1', function(req, res) {
		Players.find({role:"JGL"},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		}).sort({LP:-1});
	});

	
	app.get('/jogMID1', function(req, res) {
		Players.find({role:"MID"},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		}).sort({LP:-1});
	});

	
	app.get('/jogADC1', function(req, res) {
		Players.find({role:"ADC"},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		}).sort({LP:-1});
	});

	app.get('/jogSUP1', function(req, res) {
		Players.find({role:"SUPPORT"},function(err, result){
			if (err) {
				res.status(500).send();
			} else {
				res.status(200).send(result);
			}
		}).sort({LP:-1});
	});


	app.post('/teste/:nome', function(req,res){
		let teams = {url: 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ req.params.nome +'?api_key=RGAPI-01ea554c-01c1-44cf-8179-2f323bc39709'}
	
		request(teams,(err, rres, body) => {                      
					res.send(rres);   
		})
	});

};