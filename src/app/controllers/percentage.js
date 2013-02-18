/**
 * 百分比刻度
 * @author : yu.yuy
 * @createTime : 2013-02-18
 */
(function(){
	var percentage = require("../models/percentage.js");
	exports.getPercentList = function(req, res){
		var query = req.query,
		date = query.date,
		url = query.url;
		percentage.showPercentList(date, url, function(rows,isSuccess){
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