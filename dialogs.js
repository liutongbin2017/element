/**
 * Created by liutongbin on 2017/11/6.
 */
;(function($){
    $(".dialog").click(function(){
        window.dialog({
            title:"提示",
            content:"<h1>这是一段信息</h1>",
            buttons: {
                "确定": function () {
                    console.log(122)
                },
                "取消": function () {
                    console.log(455)
                }
            }
        });
    })














})(jQuery)