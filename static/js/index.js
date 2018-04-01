define(['jquery', 'routes', 'public', 'layer', 'bootstrap', 'director'], function($, routes) {
	$(document).ready(function() {
		layer.config({
			path: 'static/plugin/layer/'
		});
		time_start_end('#time1','#time2')
		console.log(routes)
		router = Router(routes);
		router.configure({
			strict: false,
			on: function() {

			},
			before: []
		});
		router.init();

		var login_box = $('#login-box'),
		app_main_view=$("#app-main-view"),
		login_in_page;
		login_box.on('click', '#login-in', function() {
				login_in_page = layer.open({
					type: 1,
					//					skin: 'layui-layer-rim', //加上边框
					//					area: ['100%', '240px'], //宽高
					content: '<div id="login-in-page-div" clearfix" style="padding:10px;text-align: center;">' +
						'<div class="input-group">' +
						'<input id="ID-num" type="text"  class="form-control" placeholder="请输入账号"/>' +
						'</div>' +
						'<div class="input-group">' +
						'<input id="pwd" type="text"  class="form-control" placeholder="请输入密码"/>' +
						'</div>' +
						'<div class="clearfix">' +
						'<a style="line-height:34px;margin-left:10px" class="pull-right">忘记密码</a><button id="login-in-btn" class="btn btn-primary pull-right">登陆</button>' +
						'</div>' +
						'</div>',
					title: '登陆'
				});

				$('#login-in-page-div').on('focus', 'input', function() {
					layer.closeAll('dialog');
				})
			})
			.on('click', '#login-up', function() {
				require(["text!../view/loginup.html"], function(res) {
					console.log(res)
					app_main_view.html(res)

				})
			})
			.on('click', '#login-out', function() {
				require(["text!../view/loginout.html"], function(res) {
					console.log(res)
					login_box.html(res)

				})
			});
		$(document).on('keyup', '#pwd', function(eve) {
			var e = eve || window.event;
			if(e.which == 13) {
				$("#login-in-btn").trigger('click')
			}
			console.log(e.which)
		}).on('click', '#login-in-btn', function() {
			var idnum = $('#ID-num'),
				pwd = $('#pwd');
			console.log(idnum.val(), pwd.val());
			if(idnum.val().trim() == '') {
				layer.msg('请输入账号');
				return
			};
			if(pwd.val().trim() == '') {
				layer.msg('请输入密码');
				return
			}
			layer.msg('登陆')
			layer.close(login_in_page);
			require(["text!../view/logined.html"], function(res) {
				console.log(res)
				login_box.html(res)

			})
			$('#username').html(idnum.val().trim())
		});

	})
});