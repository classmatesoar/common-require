require.config({
//	baseUrl: "../../../static/",
	/*配置根目录，默认为一main.js所在路径为根目录*/
	paths: {
//		'jquery': 'js/jquery.min',
//		'jqueryForm': 'js/jquery.form.min',
//		'bootstrap': 'plugin/bootstrap/js/bootstrap.min',
//		'layer': 'plugin/layer/layer',
//		'viewer': 'plugin/viewer/viewer.min',
//		'uploadify': 'plugin/uploadify/jquery.uploadify',
//		'bootscrapSelect': 'plugin/bootscrapSelect/bootstrap-select.min',
//		'page': 'plugin/jQueryPage/page',
//		'laydate': 'plugin/laydate/laydate',
//		'config': 'js/config',
//		'director': 'js/director.min',
//		'public': 'public/public',
//		'routes':'public/routes'
		'jquery': 'jquery.min',
		'jqueryForm': 'jquery.form.min',
		'bootstrap': '../plugin/bootstrap/js/bootstrap.min',
		'layer': '../plugin/layer/layer',
		'viewer': '../plugin/viewer/viewer.min',
		'uploadify': '../plugin/uploadify/jquery.uploadify',
		'bootscrapSelect': '../plugin/bootscrapSelect/bootstrap-select.min',
		'dataTimePicker':'../plugin/dateTimePicker/js/bootstrap-datetimepicker',
		'page': '../plugin/jQueryPage/page',
		'laydate': '../plugin/laydate/laydate',
		'config': '../js/config',
		'director': '../js/director.min',
		'public': '../public/public',
		'routes':'../public/routes'
	},
	shim: {
		'config': [],
		'jqueryFom': ['jquery'],
		'bootstrap': ['jquery'],
		//		'layer':['jquery'],
		//		'viewer':['jquery'],
		//		'uploadify':['jquery'],
		//		'bootscrapSelect':['jquery'],
		'page': ['jquery'],
		//		'echarts':['jquery'],
		//		"public":['config'],
		//		'laydate':[]
	}
});
require(['index'])
	//require([/*'jquery',*/'layer','appInit','menu','testrouter','config','director'],
	//function(/*$,*/layer,app,menuData,testrouter){
	//	layer.config({
	//		path: 'libs/layer/'
	//	});
	//	console.info(testrouter)
	//	var routes = testrouter;
	//	router = Router(routes);
	//	router.configure({
	//		strict:false,
	//		on: function () {
	//			
	//		},
	//		before:[App_viewInit]
	//	});
	//	router.init();
	//
	//});