var request = require('request');
//var request = require('requestretry');

function routeHandler(req, res) {
    console.log("\n\n----------SAMPLE SERVER----------");
    console.log(req.body);
    if (!(req.body && req.body.name)) {
        res.status(400);
        res.json({ statusCode: 400, error: "Mandatory field missing" });
    }else{
		res.status(200);
		var str = "Hiee "+req.body.name+"!! Welcome to sample server!!";
		res.json({statusCode : 200 , message: str})
	}
};

module.exports = {
    routeHandler : routeHandler
};