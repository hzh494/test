window.onload = function () {
    var one=document.querySelector(".top_contain")
    var two=document.querySelector(".box");
        function getScroll() {
            //返回一个对象，key ： value ；
            return {
                //使多种浏览器兼容 scroll 
                scroll_Top: window.pageYOffset || document.documentElement.scrollTop ||
                    document.body.scrollTop || 0,
                scroll_left: window.pageYOffset || document.documentElement.scrollLeft ||
                    document.body.scrollLeft || 0
            };
        }
        //拖动浏览器滚动条，触发该事件
        window.onscroll = function () {
            if (getScroll().scroll_Top >= parseInt(getStyle(one,"height"))) {
                two.classList.add("top_nav_fixed");
                $(".language").hide(1);
                $(".wangzhan").hide(1);
            } else{
                two.classList.remove("top_nav_fixed");
            }
        }
}


$(function () {

    //集团网站按钮，下拉出现
    $(".top_le").on("click", function () {
        $(".wangzhan").stop().slideToggle();
        $("#top_naniu_lf").stop().toggleClass("top_xuanzhuan")
        $("#top_anniu_ri").stop().removeClass("top_xuanzhuan")
        $(".language").hide(1);
    });

    //语言
    $(".top_ri").on("click", function () {
        $(".language").stop().slideToggle();
        $("#top_anniu_ri").stop().toggleClass("top_xuanzhuan")
        $("#top_naniu_lf").stop().removeClass("top_xuanzhuan")
        $(".wangzhan").hide(1);
    });
    //隐藏元素
    $(".fangan").on("mouseenter", function () {
        $(this).children(".top_small").fadeIn();
    }).on("mouseleave", function () {
        $(".top_small").stop().fadeOut();
    })

    // 详情
    $("#jiejue").on("mouseenter", function () {
        $(".top_small").stop().fadeIn();
    }).on("mouseleave", function () {
        $(".top_small").stop().fadeOut();
    })
    $(".top_small").on("mouseenter", function () {
        $(this).stop().fadeIn();
    }).on("mouseleave", function () {
        $(this).stop().fadeOut();
    })


    // 详情页的内容
    $(".uu").find("li").on("click", function () {
        var index = $(this).index();
        console.log(index);
        $(this).addClass("col_li").siblings().removeClass("col_li");
        $(".top_nr").eq(index).addClass("bc").siblings().removeClass("bc");
    })



    //关闭
    $(".glyphicon-search").on("click", function () {
        $(".login-bg").stop().fadeIn();
        $(".sousuo").stop().fadeIn();
        $(".top_le").off("click");
        $(".top_ri").off("click");
    })
    $("#guanbi").on("click", function () {
        $(".login-bg").stop().fadeOut();
        $(".sousuo").stop().fadeOut();
        $(".top_le").on("click", function () {
            $(".wangzhan").stop().slideToggle();
            $("#top_naniu_lf").stop().toggleClass("top_xuanzhuan")
            $("#top_anniu_ri").stop().removeClass("top_xuanzhuan")
            $(".language").hide(1);
        });
    
        //语言
        $(".top_ri").on("click", function () {
            $(".language").stop().slideToggle();
            $("#top_anniu_ri").stop().toggleClass("top_xuanzhuan")
            $("#top_naniu_lf").stop().removeClass("top_xuanzhuan")
            $(".wangzhan").hide(1);
        });
    })


    //搜索框
    $(".tt").on("focus", function () {
        if ($(".tt").val() == "搜索") {
            $(".tt").val("");
        }
    })
    $(".tt").on("blur", function () {
        if ($(".tt").val() == "") {
            $(".tt").val("搜索");
        }
    })



    // 上部轮播图
    // ====================================================================================================================
    //利用 for 循环创建元素
    var igs = ["images/hbanner_228fg500_pc.jpg", "images/hbanner_hwcloud_828.jpg", "images/hbanner_giv2019_cn.jpg"];

    for (var i = 0; i < igs.length; i++) {
        var li = $("<li></li>");
        li.appendTo($(".boxx ul"));
        var a = $('<a href=""></a>');
        a.appendTo(li);
        var ig = $("<img>");
        ig.appendTo(a);
        ig.attr("src", igs[i]);
    }
    //创建圆点
    for (var j = 0; j < $(".boxx li").length; j++) {
        var sp = $("<span></span>");
        sp.appendTo($(".yuandian"));
    }
    // ======================================================================================================================
    //设置第一个圆点亮起来
    $(".yuandian").children().eq(0).addClass("bianse");
    //克隆第一个元素
    var clone_li = $(".boxx li:first-child").clone(true);
    $(clone_li).appendTo($(".boxx ul"));


    // =========================================================自动播放===============================


    //设置鼠标进入，离开事件
    $(".boxx").on("mouseenter", function () {
        $(".small").stop().fadeIn();
        clearInterval(timeId1);
    }).on("mouseleave", function () {
        $(".small").stop().fadeOut();
        timeId1 = setInterval(f1, 3000);
    })

    timeId1 = setInterval(f1, 3000);
    // ======================================================================================================================
    var count = 0;
    //点击左侧按钮
    $(".small span").eq(0).on("click", function () {
        console.log("左");
        //让 ul  向右移动
        if (count == 0) {
            count = $(".boxx ul").children().length - 1;
            $(".boxx ul").css("left", -count * 1266);
        }
        count--;
        $(".boxx ul").stop().animate({
            left: -1266 * count
        }, 1000);

        //点击右侧按钮，圆点随图片一起动
        $(".yuandian").children().eq(count).addClass("bianse").siblings().removeClass("bianse");
    })
    // =======================================================================================================================

    // 设置圆点 ,图片跟着圆点走,用的是委托事件
    $(".yuandian").on("mouseenter", "span", function () {
        var index = $(this).index();
        $(".boxx ul").css("left", -index * 1266);
        $(this).addClass("bianse").siblings().removeClass("bianse");
    })

    // =====================================================================================================================
    //点击右侧按钮
    $(".small span").eq(1).on("click", f1)

    function f1() {
        if (count == $(".boxx ul").children().length - 1) {
            count = 0;
            $(".boxx ul").css("left", 0);
        }
        count++;
        $(".boxx ul").stop().animate({
            left: -1266 * count
        }, 1000);

        //点击右侧按钮时，圆点跟着图片走
        if (count == $(".boxx ul").children().length - 1) {
            $(".yuandian").children().eq(0).addClass("bianse").siblings().removeClass("bianse");
        } else {
            $(".yuandian").children().eq(count).addClass("bianse").siblings().removeClass(
                "bianse");
        }
    }




    // =================================================================================================================

    // 淡入淡出轮播图
    var count1 = 0;
    $(".xuanzhuanmuma").on("mouseenter", function () {
        $(".arrow").css("display", "block");
        clearInterval(timeId2);
    }).on("mouseleave", function () {
        $(".arrow").css("display", "none");
        timeId2 = setInterval(f2, 3000);
    })

    timeId2 = setInterval(f2, 3000);
    //点击右侧按钮
    $(".arrow-right").click(f2);

    function f2() {
        count1++;
        if (count1 == $(".xuanzhuanmuma_one").length) {
            count1 = 0;
        }
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".xuanzhuanmuma_one").eq(count1).stop().fadeIn().siblings().stop().fadeOut();
    }

    $(".arrow-left").click(function () {
        count1--;

        if (count1 == -1) {
            count1 = $(".xuanzhuanmuma_one").length - 1;
        }
        //让count渐渐的显示，其他兄弟渐渐的隐藏
        $(".xuanzhuanmuma_one").eq(count1).stop().fadeIn().siblings().stop().fadeOut();
    })


    // 华为P30动画
    var imggs = document.getElementById("p30");
    setInterval(function () {
        imggs.classList.add("imggs");
    }, 5000);

    setInterval(function(){
    var p30=document.getElementById("p30");
    $("#p30").stop().animate({left:1366,height:0,top:270},3000,function(){
        $(this).animate({left:550,height:540,top:0},3000,function(){
            animate(p30,{})
        });
    });
    },1000);

})