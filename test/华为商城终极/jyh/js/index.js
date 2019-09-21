$(function () {

    $('#top1').click(function () {
        $('.banner_top').css('display', 'none');
    })
    

    //top切换
    $('.nav_home_short_center li ').mouseenter(function () {
        $(this).addClass("current").siblings().removeClass("current");
        // 点击的同时，得到当前的索引号
        var index = $(this).index();

        console.log(index);
        // 让下部里面相应索引号的
        $(".hide_nav_one").eq(index).stop().show(200).siblings().stop().hide(200);
        console.log($(".hide_nav_one").eq(index));
    })
    $('.nav_home').mouseleave(function () {
        $('.hide_nav_one').slideUp(200);



    })
    //返回顶部
    var dingbu = $('.dingbu').offset().top;
    $(window).scroll(function () {
        //获取页面卷起的距离
        var valTop = $(document).scrollTop();
        if (valTop >= 500) {
            $('.dingbu').css('display', 'block');
        } else {
            $('.dingbu').css('display', 'none');
        }

    })
    $('.dingbu').click(function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });





    //轮播

    $(function () {



        $('#demo01').flexslider({

            animation: "slide",

            direction: "horizontal",

            easing: "swing"

        });



        $('#demo02').flexslider({

            animation: "slide",

            direction: "vertical",

            easing: "swing"

        });



    });

    //懒加载
    lazyLoadInit({
        coverColor: "white",
        coverDiv: "<h1>...</h1>",
        offsetBottom: 0,
        offsetTopm: 0,
        showTime: 2100,
        onLoadBackEnd: function (i, e) {
            // console.log("onLoadBackEnd:" + i);
        },
        onLoadBackStart: function (i, e) {
            // console.log("onLoadBackStart:" + i);
        }
    });



    //获取距离文档顶部的距离
    var top_roll = $('.title').offset().top;
    // console.log(top_roll);
    // console.log(top_roll);
    // 电梯导航
    $(window).scroll(function () {
        showDiv();

        function showDiv() {
            //获取卷起的距离
            var topVal = $(document).scrollTop();
            // console.log(topVal);



            //判断
            if (topVal >= 500) {



                $('.roll_box').addClass('dianti_nav');
                // console.log('aaaaaa');


            } else {

                $('.roll_box').removeClass('dianti_nav');
                // console.log('bbbbbbb');


            }
        }


    })
    //电梯导航
    showDiv1();

    function showDiv1() {
        // 页面滚动出去一段距离，让电梯导航显示
        // 获取卷起距离
        var topVal = $(document).scrollTop();
        // console.log(topVal);
        var aa = $('.title').offset().top;
        // console.log(aa);





        // 判断
        if (topVal >= $('.title').offset().top) {
            // 让盒子显示
            $('.dt').fadeIn();
            // console.log('aaa');

        } else {
            $('.dt').fadeOut();
            // console.log('bbbb');

        }
    }

    //添加滚动事件
    $(window).scroll(function () {

        showDiv1();


        // 滚动的过程中，如果 到大某个div就要让对应的li显示效果
        // 知道当前这个盒子的索引值，如果索引值找到li
        // 卷起距离和每一个盒子到顶部距离比较，如果超过顶部的距离，说明到大这个盒子，
        // 此时就得让对应的li显示样式
        var top = $(document).scrollTop();
        $('.shouji').each(function (i, elm) {

            // 让top和每个盒子顶部比较
            if (top >= $(elm).offset().top) {
                $('.dt li').eq(i).addClass('lei').siblings().removeClass('lei');
            }

        });

    });


    // 点击电梯导航，页面到指定的位置
    // $('.dt li').click(function () {
        
    //     // 我们得知道要到哪个盒子，
    //     // 求出这个盒子距离文档顶部的位置
    //     // 把scrollTop设置成这个位置，那么这个效果就实现
    //     // 1、点击li要知道这个li的索引值
    //     var index = $(this).index();
    //     console.log(index);
    //     var that = this;
    //     // 2、找到对应的div及到顶部的位置
    //     var topZhi = $('.shouji').eq(index).offset().top;
    //     console.log(topZhi);
        
    //     // 3、修改卷起距离
    //     $(document).scrollTop(topZhi);
    //     // 动画要加给元素
    //     // $('body,html').animate({
	// 	// 	scrollTop : topZhi
	// 	// },function () {
	// 	// 	$(that).addClass('lei').siblings().removeClass('lei');
	// 	// });

    //     $("body, html").stop().animate({
    //         scrollTop: topZhi
    //     });
    //     // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
    //     $(this).addClass("lei").siblings().removeClass();



    // });

    $('.dt li').click(function () {

        // 我们得知道要到哪个盒子，
        // 求出这个盒子距离文档顶部的位置
        // 把scrollTop设置成这个位置，那么这个效果就实现
        // 1、点击li要知道这个li的索引值
        var index = $(this).index();
        var that = this;
        // 2、找到对应的div及到顶部的位置
        var topZhi = $('.lou>div').eq(index).offset().top+1;
        // 3、修改卷起距离
        // $(document).scrollTop(topZhi);
        // 动画要加给元素
        $('body,html').animate({
            scrollTop: topZhi
        }, function () {
            $(that).addClass('lei').siblings().removeClass('lei');
        });
    });
})