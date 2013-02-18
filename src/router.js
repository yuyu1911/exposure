
/**
 * 路由器
 * @author : yu.yuy
 * @createTime : 2012-07-21
 */
(function(){
    var overview = require('./app/controllers/overview.js'),
    pixel = require('./app/controllers/pixel.js'),
    percentage = require('./app/controllers/percentage.js');
    module.exports = function(app){
    	//概览信息接口
    	app.get('/overview', function(req, res){
            overview.getOverviewList(req, res);
        });
        //绝对刻度接口
        app.get('/pixel', function(req, res){
            pixel.getPixelList(req, res);
        });
        //百分比刻度接口
        app.get('/percentage', function(req, res){
            percentage.getPercentList(req, res);
        });
    };
})();