/**
 * 概览信息接口
 * @author : yu.yuy
 * @createTime : 2013-02-18
 */
(function(){
	var overview = require("../models/overview.js");
	exports.getOverviewList = function(req, res){
		var query = req.query,
		date = query.date,
		url = query.url;
		overview.showOverviewList(date, url, function(rows,isSuccess){
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