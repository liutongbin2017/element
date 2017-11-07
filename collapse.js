/**
 * Created by liutongbin on 2017/11/6.
 */
;(function($){
    $(function(){
        $(".head").bind("click",function(){
            var $content =$(this).next();
            if($content.is(":visible")){
                $content.hide();

            }else{
                $content.show();
                // $(this).prev().hide();
                // $content.addClass("active");
                $content.siblings(".ctn").hide();
            }
        })
        // $(".head").bind("click",function(){
        //     var $content =$(this).next();
        //     if($content.is(":visible")){
        //         $content.hide();
        //
        //     }else{
        //         $content.show();
        //         $(".content1").hide();
        //     }
        // })
        // $(".head").bind("click",function(){
        //     var $content =$(this).next();
        //     if($content.is(":visible")){
        //         $content.hide();
        //
        //     }else{
        //         $content.show();
        //         $(".content2").hide();
        //     }
        // })
        // $(".head").bind("click",function(){
        //     var $content =$(this).next();
        //     if($content.is(":visible")){
        //         $content.hide();
        //
        //     }else{
        //         $content.show();
        //         $(".content3").hide();
        //     }
        // })
    })









})(jQuery)