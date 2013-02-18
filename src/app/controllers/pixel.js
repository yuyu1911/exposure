/**
 * 绝对刻度
 * @author : yu.yuy
 * @createTime : 2013-02-18
 */
(function(){
	var pixel = require("../models/pixel.js");
	exports.getPixelList = function(req, res){
		var query = req.query,
		date = query.date,
		url = query.url;
		pixel.showPixelList(date, url, function(rows,isSuccess){
			var ret = {
				isSuccess : isSuccess,
				data : rows
			};
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify(ret));
			res.end();
		});
	};
})();