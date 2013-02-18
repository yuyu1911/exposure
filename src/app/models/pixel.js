/**
 * 绝对刻度
 * @author : yu.yuy
 * @createTime : 2013-02-05
 */
(function(){
 	var mysql = require("./db.js").db;
 	exports.showPixelList = function(date,url,callback){
 		var sql = {
 			'sql' : 'select pixel, pv, uv from r_pd_ued_log_pixel where gmt=:date and url=:url order by pixel',
 			'params' : {
 				date : date,
 				url : url
 			}
 		};
 		mysql.query(sql, 1000, function (error, rows) {
			console.log(rows);
			callback(rows, error===null?true:false);
		});
 	};
 })();