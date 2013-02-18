/**
 * 百分比刻度
 * @author : yu.yuy
 * @createTime : 2013-02-18
 */
(function(){
 	var mysql = require("./db.js").db;
 	exports.showPercentList = function(date,url,callback){
 		var sql = {
 			'sql' : 'select percen, pv, uv from r_pd_ued_log_percen where gmt=:date and url=:url order by percen',
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