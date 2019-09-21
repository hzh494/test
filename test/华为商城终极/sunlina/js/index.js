$(function () {
    //标题导航区域特效
    $(".header_nav .a_nav i").click(function () {
        $(".add_nav").stop().slideToggle(300);
        $(".one_one").stop().slideToggle(300);
        $(this).toggleClass("i_rotate");
    })
    $(".content_add_nav .public_li .xyyd").hover(function () {
        $(this).children(".icon-jiantou3").animate({
            marginLeft: '10px'
        }, "slow");
    }, function () {
        $(this).children(".icon-jiantou3").animate({
            marginLeft: '2px'
        }, "slow");
    })
    
    //content_title_nav 右侧多个div区域
    //标题导航点击按钮下拉显示框
    $(".content_title_nav .content_nav_item i").each(function(index,elm){
        $(elm).click(function(){
            console.log(index);
            $(this).toggleClass("i_rotate").parent().siblings(".content_nav_item").children("i").removeClass("i_rotate");
            $(this).parents(".title_nav").siblings(".menu_all").children(".public_menu").eq(index).stop().slideToggle(300).siblings(".public_menu").hide();
            $(window).scroll(function(){
                if($(document).scrollTop()>=5){
                    $(".public_menu").hide();
                    $(".content_title_nav .content_nav_item i").removeClass("i_rotate");
                }
            })
            $(this).parents(".title_nav").siblings(".menu_all").children(".public_menu").eq(index).children("ul").children("li").addClass("animated bounceIn");
           
        })
    })
    //关闭按钮
    $(".menu_all .public_menu .close img").click(function(){
        $(".public_menu").hide();
    })
    //注册登录模块显示隐藏     
    $(".right_title_nav .right_user i").click(function(){
        $(".right_title_nav .user_box").show();
        $(".right_title_nav .user_box").mouseleave(function(){
            $(this).hide();
        });
    });
    // footer区域鼠标移上去二维码显示与隐藏
    $(".right_top_footer li:nth-child(1)").hover(function(){
        $(".wx_ewm").fadeIn(300);
    },function(){
        $(".wx_ewm").fadeOut(300);
    })
    
    //右下角关注我们二维码显示与隐藏
    $(".right_content_footer .public_wx_1").hover(function(){
        $(this).parent().parent().siblings(".public_wx").fadeIn(500);
    },function(){
        $(this).parent().parent().siblings(".public_wx").fadeOut(500);
    })
    // 回到顶部
    $(".back_top").on("click",function(){
        //再点击回到顶部的时候，先将样式清掉，
        $(this).children("i").removeClass("animated bounce");
        $("html,body").stop().animate({
            scrollTop:0
        })  
        //在执行了返回顶部操作的时候，给i标签添加类样式
        $(this).children("i").addClass("animated bounce");
    })
    
   
    // $(".public_item .item").mouseenter(function(){
    //     $(this).siblings(".inner").stop().fadeIn();
    // })
    // $(".public_item .item").mouseleave(function(){
    //     $(this).siblings(".inner").stop().fadeOut('slow');
    // })
    
    $(".public_item .item").click(function(){
        $(this).siblings(".inner").stop().fadeIn();
        $(this).siblings(".inner").children("a").addClass("animated wobble");
        $(this).siblings(".inner").children("p").addClass("animated heartBeat");
    })
    // 搜索框
    $(".search").click(function(){
        $(this).parents(".title_nav").siblings(".search_all").slideDown(300);
    })
    $(".search_all .close img").click(function(){
        $(this).parents(".search_all").hide();
        //点击搜索图标，鼠标不能滑动
        $(window).css({
            "overflow":"hidden"
        })
    })
    $(".content ul").on("click","li",function(){
        
       $(this).parents(".content").siblings(".search_box").children("input").prop("value",($(this).children("span").html()));
       
    })

    
})
