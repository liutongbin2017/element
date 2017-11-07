/**
 * Created by liutongbin on 2017/11/7.
 */
;(function($){
    $(function(){
        var slideShow = $(".slideShow"),
            ul = slideShow.find("ul"),
            showNumber = slideShow.find(".showNav span"),
            oneWidth = slideShow.find("ul li").eq(0).width();
        var timer = null;
        var iNow = 0;
        showNumber.on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            ul.animate({
                "left":-oneWidth*iNow,
            })
        })
        timer = setInterval(function(){
            iNow++;
            if(iNow>showNumber.length-1){
                iNow = 0;
            }
            showNumber.eq(iNow).trigger("click")
        },2000)
    })






















})(jQuery);