$(function(){
    function showDiv(){
        var topval=$(document).scrollTop();
        console.log(topval)
        if (topval>($('.header_nav').offset().top)){
            $('.fixedtool').fadeIn()
        }else{
            $('.fixedtool').fadeOut()
        }
        return topval;
    }
    showDiv();

    $(window).scroll(function(){

        showDiv()

        var top=$(document).scrollTop();

        $('.floor>.iteams').each(function(i,el){

          var m= $(el).offset().top;
            if(top>=m){
                $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');
            }
    
        })
    })


    $('.fixedtool li').click(function(){
       var index= $(this).index();
       console.log(index);
      var topzhi= $('.floor>.iteams').eq(index).offset().top;
      console.log(topzhi);
// html和body要加‘’单引号
      $('html,body').animate({
          scrollTop:topzhi
      },function(){
          $(this).addClass('current').siblings().removeClass('current');

      })
    })


    $('.footer_end').click(function(){
        
        // html和body要加‘’单引号
              $('html,body').animate({
                  scrollTop:0
              },2000,function(){
                  $(this).addClass('current').siblings().removeClass('current');
              })
            })


     	
})




