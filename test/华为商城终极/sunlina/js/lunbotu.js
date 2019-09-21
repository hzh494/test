$(function () {
    var winWidth=$(window).width();
    console.log(winWidth);
    // ====================================================================================================================
    //利用 for 循环创建元素
    for (var i = 0; i < 4; i++) {    //需要修改
        var li = $("<li></li>");
        li.appendTo($(".boxs ul"));
        var a = $('<a href=""></a>');
        a.appendTo(li);
        var ig = $("<img>");
        ig.appendTo(a);
        ig.attr("src", "imgs/banner"+(i+1)+".jpg"); //需要修改
    }

    $(".boxs").css("width",winWidth);
    $(".boxs ul li").css("width",winWidth);
    $(".boxs ul").css("width",5*winWidth);


    //创建圆点
    for (var j = 0; j < $(".boxs li").length; j++) {
        var sp = $("<span></span>");
        sp.appendTo($(".yuandian"));
    }
    $(".small").css("width",winWidth);
    // ======================================================================================================================
    //设置第一个圆点亮起来
    $(".yuandian").children().eq(0).addClass("bianse");
    //获取图片的宽度
    var igboxx = $(".boxs").width();
    //克隆第一个元素
    var clone_li = $(".boxs li:first-child").clone(true);
    $(clone_li).appendTo($(".boxs ul"));

    // =====================================================================设置定时器==============================
    // 设置定时器
    timeId = setInterval(f1, 2000);


    // ======================================================================================================================
    var count = 0;
    //点击左侧按钮
    $(".small span").eq(0).on("click", function () {

        //让 ul  向右移动
        if (count == 0) {
            count = $(".boxs ul").children().length - 1;
            $(".boxs ul").css("left", -count * igboxx);
        }
        count--;
        $(".boxs ul").stop().animate({
            left: -igboxx * count
        }, 1000);

        //点击右侧按钮，圆点随图片一起动
        $(".yuandian").children().eq(count).addClass("bianse").siblings().removeClass("bianse");
    })


    // =======================================================================================================================

    // 设置圆点 ,图片跟着圆点走,用的是委托事件
    $(".yuandian").on("mouseenter", "span", function () {
        var index = $(this).index();
        $(".boxs ul").css("left", -index * igboxx);
        $(this).addClass("bianse").siblings().removeClass("bianse");
    })


    // ======================================================================================================================


    //点击右侧按钮
    $(".small span").eq(1).on("click", f1);

    function f1() {
        if (count == $(".boxs ul").children().length - 1) {
            count = 0;
            $(".boxs ul").css("left", 0);
        }
        count++;
        $(".boxs ul").stop().animate({
            left: -igboxx * count
        }, 1000);

        //点击右侧按钮时，圆点跟着图片走
        if (count == $(".boxs ul").children().length - 1) {
            $(".yuandian").children().eq(0).addClass("bianse").siblings().removeClass("bianse");
        } else {
            $(".yuandian").children().eq(count).addClass("bianse").siblings().removeClass(
                "bianse");
        }
    }

    $(".boxs").on("mouseenter", function () {
        $(".small").stop().fadeIn();
        clearInterval(timeId);
    }).on("mouseleave", function () {
        $(".small").stop().fadeOut();
        timeId = setInterval(f1, 3000)
    })
})