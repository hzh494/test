// 可删除广告
$('#top_banner-s1').click(function () {
    $('.top_banner-s').css('display', 'none');
})

//..................................................................
//搜索框
//显示
$('.right_inp1s').focus(function () {
    $('.box_a').slideDown(200);
    $('.right_inp2').hide();
})

//隐藏
$('.right_inp1s').blur(function () {
    $('.box_a').slideUp(200);
    $('.right_inp2').show();

})

//..................................................................
// 顶部左侧导航栏隐藏部分
// 显示
$('.nav-a2').mouseover(function () {
    $('.nav-a1').css('display', 'block');
    $('.nav-a2').addClass('s');
    // $('.nav-a2>a i').css('background','url(../../../img/sprites3.png) no-repeat -17px 0')
})

// 隐藏
$('.nav-a2').mouseout(function () {
    $('.nav-a1').css('display', 'none');
    $('.nav-a2').removeClass('s');
})

//..................................................................
// 轮播图左侧隐藏部分
$('.banner_nav2').mouseover(function () {
    $(this).css('background-color', '#fff').siblings().css('background-color', '');
    $(this).children('.banner_nav1').css('display', 'block');
})

$('.banner_nav2').mouseout(function () {
    $(this).css('background-color', '');
    $(this).children('.banner_nav1').css('display', 'none');
})
//圆角问题
$('.banner_nav').mouseover(function () {
    $('.banner_nav>ol').css('border-radius','10px 0 0 10px')
})

$('.banner_nav').mouseout(function () {
    $('.banner_nav>ol').css('border-radius','10px')
})

//..................................................................
// 右侧固定导航栏
var box_right = $('.main-b').offset().top;
var box_bo = $('.main-jw1').offset().top;

// 显示和隐藏
fr();
function fr() {
    if ($(document).scrollTop() >= box_right && $(document).scrollTop() <= box_bo) {
        $('.box-right').stop().slideDown(200);
    } else {
        $('.box-right').stop().slideUp(200);
    }
}

// 添加类名
$(window).scroll(function () {
    fr();

    $('.main-c .main-c1js').each(function (i, _mel) {
        // 判断位置
        if ($(document).scrollTop() >= $(_mel).offset().top) {
            $('.box-right li').eq(i).addClass('b').siblings().removeClass('b');
        }
    })
})

// 点击滚动
$('.box-right li').click(function () {
    console.log($(this).index());

    var sum = $('.main-c .main-c1js').eq($(this).index()).offset().top;
    sum += 1;
    console.log(sum);

    $('body,html').stop().animate({
        scrollTop: sum
    }, function () {
        $(this).addClass('b').siblings().removeClass('b');
    })

})

//..................................................................

//返回顶部按钮
$('.icon-fanhui').click(function () {
    $('body,html').animate({
        scrollTop: 0
    })
})

//..................................................................
// 结尾微信图片显示
$('.footer-b3 .icon-weixin').mouseover(function () {
    // $('.footer-b5').css('display', 'block');
    $('.footer-b5').stop().fadeIn();
})
//隐藏
$('.footer-b3 .icon-weixin').mouseout(function () {
    // $('.footer-b5').css('display', 'none');
    $('.footer-b5').stop().fadeOut();
})

//..................................................................
//大轮播图
$('.top_banner1>li').eq(0).stop().fadeIn().siblings().stop().fadeOut();
var span_fr = 1;
// 小圆点
$('.top_banner_span>span').click(function () {
    span_fr = $(this).index();

    if (span_fr >= 4) {
        span_fr = 0;
    }
    $('.top_banner1>li').eq(span_fr).stop().fadeIn().siblings().stop().fadeOut();
    spanf(span_fr);
    span_fr++;
    $(this).addClass('ff').siblings().removeClass('ff');
})

//右
$('.banner_nav-a .fr').click(function () {
    if (span_fr >= 4) {
        span_fr = 0;
    }
    $('.top_banner1>li').eq(span_fr).stop().fadeIn().siblings().stop().fadeOut();
    spanf(span_fr);
    // console.log(span_fr)
    span_fr++;
})
//左
$('.banner_nav-a .fl').click(function () {
    span_fr = span_fr - 2;
    if (span_fr < 0) {
        span_fr = 3;
    }
    $('.top_banner1>li').eq(span_fr).stop().fadeIn().siblings().stop().fadeOut();
    spanf(span_fr);
    // console.log(span_fr);
    span_fr++;
})
//小圆点加类
function spanf(index) {
    $('.top_banner_span>span').eq(index).addClass('ff').siblings().removeClass('ff');
}

//自动播放
//定时器
var banner_ids = null;
function zdbf() {
    banner_ids = setInterval(function () {
        $('.banner_nav-a .fr').click();
    }, 2000)
}
zdbf();
//清除计时器
$('.top_banner').mouseover(function () {
    clearInterval(banner_ids);
})
//添加计时器
$('.top_banner').mouseout(function () {
    zdbf();
});

//..................................................................
//小轮播图
$('.banner-a1 li').eq(0).stop().fadeIn().siblings().stop().fadeOut();
var span_fr = 1;
// 小圆点
$('.banner-a1>div>span').mouseover(function () {
    span_fr = $(this).index();

    if (span_fr >= 4) {
        span_fr = 0;
    }
    $('.banner-a1 li').eq(span_fr).stop().fadeIn().siblings().stop().fadeOut();
    // console.log(span_fr);
    span_fr++;
    $(this).addClass('co').siblings().removeClass('co');
});
//自动播放
//定时器
var banner_id = null;
function xzdbf() {
    banner_id = setInterval(function () {
        span_fr -= 1;
        if (span_fr >= 4) {
            span_fr = 0;
        }
        $('.banner-a1 li').eq(span_fr).stop().fadeIn().siblings().stop().fadeOut();
        $('.banner-a1>div>span').eq(span_fr).addClass('co').siblings().removeClass('co');
        span_fr++;
    }, 2000)
}
xzdbf();
$('.banner-a1>ul>li').mouseover(function () {
    //清除计时器
    clearInterval(banner_id);
})

$('.banner-a1>ul>li').mouseout(function () {
    //添加计时器
    xzdbf();
})

//..................................................................
//精品推荐内容和结尾轮播列表
var ulj = document.querySelector('.main-b2>ul');
var span1 = document.querySelector('.span_j2');
var span2 = document.querySelector('.span_j1');

span1.onclick = function () {
    animation(ulj, ulj.offsetLeft, -1200, 50, 20);
    this.style.display = 'none';
    span2.style.display = 'block';
}
span2.onclick = function () {
    animation(ulj, ulj.offsetLeft, 0, 50, 20);
    this.style.display = 'none';
    span1.style.display = 'block';
}

var uls = document.querySelector('.main-jw1>ul');
var span3 = document.querySelector('.span_j4');
var span4 = document.querySelector('.span_j3');

span3.onclick = function () {
    animation(uls, uls.offsetLeft, -1200, 50, 20);
    this.style.display = 'none';
    span4.style.display = 'block';
}
span4.onclick = function () {
    animation(uls, uls.offsetLeft, 0, 50, 20);
    this.style.display = 'none';
    span3.style.display = 'block';
}

//..................................................................
//右侧顶部导航栏隐藏部分

$('.nav_a_no').mouseover(function () {
    $(this).addClass('li_fff').children('div').css('display', 'block');
})

$('.nav_a_no').mouseout(function () {
    $(this).removeClass('li_fff').children('div').css('display', 'none');
})

//..................................................................
//顶部导航栏小三角
var li = $('.nav_i').parent().parent();
$(li).each(function (i,e) {

    $(li).eq(i).mouseover(function () {
        $(this).children('a').css('color','#C81623').find('.nav_i').removeClass('nav-a2_i').addClass('nav-a2_i1');
    })

    $(li).eq(i).mouseout(function () {
        $(this).children('a').css('color','#666').find('.nav_i').removeClass('nav-a2_i1').addClass('nav-a2_i');
    })
})

//..................................................................

//遮罩层
$('.main-c2>ul>li').each( function (i,e) {
    var dd = $('<div class="zzc"><h1>六组真是太牛批了1111111111</h1></div>');
    $('.main-c2>ul>li').eq(i).addClass('dw1').append(dd);
    $('.main-c2>ul>li').eq(i).mouseover(function() {
        $(this).find('.zzc').stop().fadeIn(200);
    })
    $('.main-c2>ul>li').eq(i).mouseout(function() {
        $(this).find('.zzc').stop().fadeOut(200);
    })
    
})










