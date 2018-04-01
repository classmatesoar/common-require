define(["jqeury"],function($){
	return {
		"test":function(){
			require(['text!../view/test.html'],function (res) {
				$('#main').html(res)
//				app.viewHeader.html(res);
//				console.info(cf);
//				App_configLoading('dbrw',cf);
//				App_page1Config('dbrw','/clgl/getList/tasktop');
			})
		}
//		'/dbrw':[function () {
//			require(['text!../public/page1.html','../viewConfig/dbrw'],function (res,cf) {
//				app.viewHeader.html(res);
//				console.info(cf);
//				App_configLoading('dbrw',cf);
//				App_page1Config('dbrw','/clgl/getList/tasktop');
//			})
//		}],
//		'/djsb':[function () {
//			require(['text!../public/page8.html','../viewConfig/djsb'],function (res,cf) {
//				app.viewHeader.html(res);
//				App_configLoading('djsb',cf);
//				App_page8Config('djsb','');
//			})
//		}],
//		'/qbtj':[function () {
//			require(['text!../public/page3.html','../viewConfig/qbtj','qbtjController'],function (res,cf,fun) {
//				app.viewHeader.html(res);
//				App_configLoading('qbtj',cf);
//				App_page3Config('qbtj','');
//				fun();
//			})
//		}],
//		'/rygl':[function () {
//			require(['text!../public/page2.html','../viewConfig/rygl'],function (res,cf) {
//				app.viewHeader.html(res);
//				App_configLoading('rygl',cf);
//				App_page2Config('rygl','/djgzry/getList');
//			})
//		}],
//		'/ryyj':[function () {
//			require(['text!../public/page2.html','../viewConfig/ryyj'],function (res,cf) {
//				app.viewHeader.html(res);
//				App_configLoading('ryyj',cf);
//				App_page2Config('ryyj','/hdxx/getNewList');
//			})
//		}],
//		'/dzda':[function () {
//			require(['text!../public/page5.html','../viewConfig/dzda','dzdaController'],function (res,cf,fun) {
//				app.viewHeader.html(res);
//				App_configLoading('dzda',cf);
//				App_page5Config('dzda','');
//				fun();
//			})
//		}],
//		'/kshfx':[function () {
//			require(['text!../public/page6.html','../viewConfig/kshfx','kshfxController'],function (res,cf,fun) {
//				app.viewHeader.html(res);
//				App_configLoading('kshfx',cf);
//				App_page6Config('kshfx','');
//				fun();
//			})
//		}],
//		'/yss':[function () {
//			require(['text!../public/page4.html','../viewConfig/yss','yssController'],function (res,cf,fun) {
//				app.viewHeader.html(res);
//				App_configLoading('yss',cf);
//				App_page4Config('yss','');
//				fun();
//			})
//		}
		]
	}
})