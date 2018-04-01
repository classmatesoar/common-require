define(['jquery', 'dataTimePicker', 'config', 'layer'], function ($) {
    'use strict';
    layer.config({
        path: 'static/plugin/layer/'
    });
    (function (exports) {
        var baseUrl = '',
            thisTicket = '';
        exports.rad_layermsg = function (color) {
            var layui_layer_hui = $('.layui-layer-hui');
            layui_layer_hui.css('background', color);
            console.log(layui_layer_hui);
            console.log(layui_layer_hui.length);
        };
        exports.time_start_end = function (id1, id2) {
            $(id1).datetimepicker({
                format: 'yyyy-mm-dd hh:mm:ss',
                // minView:'month',
                language: 'zh-CN',
                autoclose: true,
                endDate: new Date()
            }).on("click", function () {
                $(id1).datetimepicker("setEndDate", $(id2).val())
            });
            $(id2).datetimepicker({
                format: 'yyyy-mm-dd hh:mm:ss',
                // minView:'month',
                language: 'zh-CN',
                autoclose: true,
                endDate: new Date()
            }).on("click", function () {
                $(id2).datetimepicker("setStartDate", $(id1).val())
            });
        };
        exports.time_start_end_panel = function (id) {
            var id_val = id.replace('#', '');
            function handle1() {
                $(this).trigger('blur').parent().find('.time_start_end_panel_center').removeClass('hidden')
                    .end().end().one('click', handle2);
                $(id + 'copy2').datetimepicker('show');
                $(id + 'copy1').trigger('focus').datetimepicker('show');
                $(this).parent().find('.time_start_end_panel_center')
                    .one('change', '.time_start_end_panel_center_item', function () {
                        console.log(1)
                        var this_target = $(this).attr('data-target');
                        $('#'+this_target).one('change', function () {
                            console.log(2)
                            $(id).val($(id + 'copy1').val() + '——' + $(id + 'copy2').val())
                                .parent().find('.time_start_end_panel_center').addClass('hidden')
                        })
                    })
                // $('.time_start_end_panel_center_item').one('change', function () {
                //     console.log($(this).val())
                // })
            }
            function handle2() {
                $(this).parent().find('.time_start_end_panel_center').addClass('hidden')
                    .end().end().trigger('blur').one('click', handle1)
            }
            $(id).one('click', handle1)
                .wrap('<span class="time_start_end_panel_wrap"></span>')
                .after('\
                <div class="time_start_end_panel_center hidden">\
                    <input data-target="'+ id_val + 'copy2" class="time_start_end_panel_center_item form-control" placeholder="请选择起始时间" type="text" id="' + id_val + 'copy1">\
                    <input data-target="'+ id_val + 'copy1" class="time_start_end_panel_center_item form-control" placeholder="请选择结束时间" type="text" id="' + id_val + 'copy2">\
                </div>\
            ');
            time_start_end(id + 'copy1', id + 'copy2');
        }
        exports.ajaxFun = function (url, data, rType) {
            var defer = $.Deferred();
            data = (data == undefined ? { ticket: thisTicket } : data);
            if (data.ticket == undefined) {
                data.ticket = thisTicket
            }
            rType = (rType == undefined ? 'post' : rType);
            if (rType != "getJSON") {
                url = baseUrl + url
            } else {
                rType = 'get';
                data = null;
            }
            console.log(url, rType, data);

            var layerLoading = layer.load(0, {
                shade: [0.1, '#000']
            });
            $.ajax({
                type: rType,
                url: url,
                data: data,
                async: true,
                timeout: 0,
                success: function (res) {
                    console.log(res);
                    defer.resolve(res);
                },
                error: function (res) {
                    defer.reject(res);
                    if (res.statusText == 'timeout') {
                        layer.msg('请求超时')
                    } else {
                        layer.msg('网络错误')
                    }
                    rad_layermsg('rgba(255, 0, 0, 0.62)');
                },
                complete: function () {
                    layer.close(layerLoading)
                }
            });
            return defer
        };
        exports.ajax_req = function (url, data, rType) {
            return $.when(ajaxFun(url, data, rType))
        };
    })(window)
});