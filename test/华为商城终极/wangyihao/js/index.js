window.onload=function(){
    let li = document.querySelectorAll('.c1');
    for (let j = 0; j < li.length; j++) {
        li[j].onmouseover = function () {
            this.children[0].style.display = 'none';
            this.children[2].style.display = 'block';
        }
        li[j].onmouseout = function () {
            this.children[0].style.display = 'block';
            this.children[2].style.display = 'none';
        }
    }
}



$(function() {
    $('.product_gg').hover(function(){
    
    $(this).children().toggle();
    
})
// 轮播图
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
})

$('.shop_box img').mouseover(function(){
    console.log(1);
})