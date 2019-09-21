$('.sou_int').focus(function () {
    $(this).siblings('span').hide();
})
$('.sou_int').blur(function () {
    $(this).siblings('span').show();
})


// **************************************************
// 隐藏导航栏
$('.hidden_q').hover(function () {
    $('.hidden').stop().slideDown(200);
}, function () {
    $('.hidden').stop().slideUp(200);
})

$('.hidden').hover(function () {
    console.log('q');
    $('.hidden').stop().slideDown(200);
}, function () {
    $('.hidden').stop().slideUp(200);
})

// console.log($('.hidden').parents());




// 广告




// 类型


$('.pro_box1').click(function () {
    $(this).find('ul').css('display', 'block');
    $(this).siblings().find('ul').css('display', 'none');
    $('.pro_box1 li').click(function (e) {
        var i = $(this).text()
        $(this).parent().css('display', 'none').siblings('span').text(i);
        e.stopPropagation();

    })

})
$('.pro_box1').find('li').mouseenter(function (e) {
    $(this).css({
        'background': '#09B4DF',
        'color': '#fff'
    }).siblings().css({
        'background': '',
        'color': ''
    })
    e.stopPropagation();


})
$('.pro_box1').mouseleave(function (e) {
    console.log('q');
    $('.pro_box1 ul').css('display','none');
    // console.log($('.pro_box1 ul'+'wwwwwwwwwwww'))
    // console.log('22222222222222');

    e.stopPropagation();
})






// 返回顶部

$('.fixed').click(function () {
    console.log('q');

    $('body,html').animate({
        scrollTop: 0
    })

})

showDiv();

function showDiv() {
    var topVal = $(document).scrollTop();
    if (topVal >= 200) {
        if (topVal >= 2550) {
            console.log('q');
            $('.fixed').css({
                'position': 'absolute',
                'bottom': '50px',
                'display':'block'
                // 'left': '50%',
                // 'marginLeft':'600px'
            }).parent().css({'position':'absolute','left':'1px'});

        } else {
            $('.fixed').fadeIn();
            $('.fixed').css({
                'position': 'fixed',
                'bottom': '0',
                'display':'block'
                // 'left': '50px',
                // 'marginLeft':'600px'
            });
        }
    } else {
        $('.fixed').fadeOut();
    }
}
$(window).scroll(function () {
    showDiv();
})