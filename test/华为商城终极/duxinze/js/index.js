$(function(){
    //点击事件
    $('.footer_tabs_nav li').click(function(){
        var footer_tabs =$(this).index();
        // console.log(footer_tabs)
        $('.footer_tabs_content section').eq(footer_tabs).fadeIn().siblings().hide()
        
    })
    //轮播图
    $('.carousel').carousel({
        interval: 3000
      })
      //盒子背景颜色
      $('.product_box_3,.product_content_2,.hot_box_4,.hot_box_4_r.product_box_3_x,.product_box_3_r').hover(function(){
          $(this).addClass('style_one').siblings().removeClass('style_one');
          $(this).children('img').css({
            'transform':'scale(1.05)',
            'transition':'0.4s'
          });
      },
      function(){
        $(this).removeClass('style_one');
        $(this).children('img').css('transform','scale(1)');
          })

      //导航栏固定定位
      window.addEventListener('scroll',function(){
        let t = $(document).scrollTop();
        if(t>615){
          $('.fixed_nav').addClass('nav_active')
        }else{
          $('.fixed_nav').removeClass('nav_active')
        }
      })
      //返回顶部动画
      $('.footer_bott1').click(function(){
        $('body,html').scrollTop(0)
      })
      
   

} )
