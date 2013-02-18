/**
 * 概览信息
 * @author : yu.yuy
 * @createTime : 2013-02-18
 */
(function(){
 	var mysql = require("./db.js").db;
 	exports.showOverviewList = function(date,url,callback){
 		var sql = {
 			'sql' : 'select * from r_pd_ued_log_url where gmt=:date and url=:url',
 			'params' : {
 				date : date,
 				url : url
 			}
 		};
 		mysql.query(sql, function (error, rows) {
			console.log(rows);
			console.log(error);
			callback(rows, error===null?true:false);
		});
 	};
 })();