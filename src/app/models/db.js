/**
 * mysql数据库配置
 * @author : yu.yuy
 * @createTime : 2013-02-04
 */
(function(){
    var client = require('easymysql'),
    db = client.create({
	  'maxconnections' : 10
	});
    db.addserver({
	  'host' : '10.232.36.160',
	  'user' : 'ued_fdc_usr',
	  'password' : 'cUiufPAhusw7sOn6',
	  'database' : 'ued_fdc'
 	});

// 	var sql = {

// 		'sql' : 'SHOW TABLE STATUS IN (:tab)',
// 		'params' : {
// 			'tab' : ['A','B']
// 		}
// 	};
// 	db.query(sql, 1000, function (e, r) {
// console.log(r);

// 	});
	exports.db = db;
})();


