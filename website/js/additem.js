var data = require("../data.json");

exports.addItem = function(req, res) {
	var inputName = req.query.name;
	var inputPrice = req.query.price;
	newitem = {
		'name': inputName,
		'price': inputPrice,
	};
	data.item.push(item);
	res.render('index', data);
}