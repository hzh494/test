$(function(){
    // 创建元素
    // 所有的a阻止转跳
    // $('a').click(function(e){
    //     e.preventDefault()
    // })
  
    // 创建结构部分结束
//    顶部,软件应用部分
// 字体图标需要更改为图片
    var MLi= document.querySelector('.m-li:nth-child(5)');
 
    var Mli_ul = MLi.getElementsByTagName('ul');
    
    MLi.onmouseenter = function () {
       $('.triangle')[0].style.transform = 'rotateZ('+180+'deg)';
        Mli_ul[0].style.display = 'block';
    }
    MLi.onmouseleave = function () {
       $('.triangle')[0].style.transform = 'rotateZ('+0+'deg)';
        Mli_ul[0].style.display = 'none';
    }

    // 点击帖子,出现下拉框
    $('.select>li').click(function(){
        $('.select>li ul').css('display','block');
    })
    $('.select').mouseleave(function(){
        $('.select>li ul').css('display','none');
    })

    // 划过版块,小红点位置发生改变  
    $('.nav-parent>li').mouseenter(function(){
                            // 距离父元素左边距离,        li元素宽度的1/2
            var leftVal = $(this).position().left + $(this).innerWidth()/2
          $('.dot').stop().animate({
              left:leftVal
          })
          
        })
        // 鼠标离开
    $('.nav-parent>li').mouseleave(function(){     
        // var leftVal = $(this).position().left + $(this).innerWidth()/2
      $('.dot').stop().animate({
          left:46
      })
      
    })
    // 小圆点部分结束

// 出现下拉框的函数封装
     function getUl (ele) {
       ele.mouseenter(function(){
           $(this).children('ul').css('display','block')
       })
       ele.mouseleave(function(){
        $(this).children('ul').css('display','none')
       })
     }
        // 滑过更多
     getUl($('.nav-parent>li:last-child'));
     //  滑过圈子
     getUl($('.nav-parent>li:nth-child(5)'))
        //  滑过版块
    getUl($('.nav-parent>li:nth-child(3)'))

// 轮播图部分

    //  鼠标进入,显示按钮
     var jinrushijian = function(){

        $('img.currented').stop().show().siblings().stop().hide();
        // 只需要对两种按钮的其中一个进行监听
            $('img.currented').on({
                mouseenter:function(){
                $(this).stop().hide().siblings().stop().show();
                },        
        })

        $('img.actived').on({
                mouseleave:function(){
                    $(this).stop().hide().siblings().stop().show()
                }
        })

    }

    $('.m-banner')[0].addEventListener('mouseenter',jinrushijian);
  
    // 鼠标离开
    var likaishijian = function(){
        $('img.currented').stop().hide();     
    }
    $('.m-banner')[0].addEventListener('mouseleave', likaishijian);

    // 点击蓝色右侧按钮
    var newIndex = 0;    
    var width = $('.m-banner').width();
    // 点击右侧按钮
    $('.btn-r img.actived').click(function(){
          // 兄弟元素去除样式
          $('.dottz li').eq(newIndex).removeClass('dottzActive');        
        if( newIndex==0) {
             $('.m-banner .content')[0].style.left = 0;
        }
        newIndex++;
        // 元素左边距离父元素左边的距离
        var leftVal = $('.m-banner .content')[0].offsetLeft;        
        // 需要移动的距离
        var nowVal = -newIndex*width;       
        animation($('.m-banner .content')[0],leftVal,nowVal,100,30);
        if(newIndex==6){
            newIndex=0;
        }
        $('.dottz li').eq(newIndex).addClass('dottzActive');      

    })

    // 点击左侧按钮
    $('.btn-l img.actived').click(function(){
        console.log(newIndex)
        // 兄弟元素去除样式
        $('.dottz li').eq(newIndex).removeClass('dottzActive');      
      newIndex--;
      if(newIndex < 0) {
        newIndex=5
        $('.m-banner .content')[0].style.left =-5760+'px';
   }  
      // 元素左边距离父元素左边的距离
      var leftVal = $('.m-banner .content')[0].offsetLeft;
      
      // 需要移动的距离
      var nowVal = -newIndex*width;     
      animation($('.m-banner .content')[0],leftVal,nowVal,100,30);
      $('.dottz li').eq(newIndex).addClass('dottzActive');        
  })


//   点击白色圆点,移动轮播图
$('.dottz li').click(function(){

newIndex = $(this).index();
var leftVal = $('.m-banner .content')[0].offsetLeft;
var nowVal = -newIndex*width;  
animation($('.m-banner .content')[0],leftVal,nowVal,100,30);
$(this).addClass('dottzActive').siblings().removeClass('dottzActive');

})
    // 自动轮播
              
    var timer = setInterval(function(){
                    $('.btn-r img.actived').click()
                },3000)
                // 鼠标进入,停止;
                $('.m-banner')[0].addEventListener('mouseenter',function(){
                    clearInterval(timer)
                })
                $('.m-banner')[0].addEventListener('mouseleave',function(){
                  timer = setInterval(function(){
                        $('.btn-r img.actived').click()
                    },3000)
    
                })

// 导航栏,滚轮滚动,导航固定定位
console.log($('.navigator .dot').offset().left)
console.log($('.navigator').offset().left)
var topVal = $('.navigator').offset().top
console.log(topVal)
$(window)[0].addEventListener('scroll',function(){
    if($(document).scrollTop()>=topVal) {
        $('.navigator').css({
            position : 'fixed',
            top : 0,
        }).addClass('fixedDiv')
       $('.navigator .dot').css({
           poasition : 'fixed',
           left : 45,
           top : 42,

       })
    }else{
        $('.navigator').css({
            position : 'relative',
            top : 0,
        }).removeClass('fixedDiv')

    }
})

// 版块随滚动条滚动

// 获取鼠标移入时的文档卷起高度
var outerHeight;
$('.nav-parent>li:nth-child(3)')[0].addEventListener('mouseenter',function(){
    outerHeight = $(document).scrollTop();
})

$(window).scroll(function(){

    var height = $(document).scrollTop() //卷起的距离
    var distance = height - outerHeight;
    if(height>114){
        $('#menu_zdd').css({
        top: -parseInt(distance,10),
        left:-92,
    })
    }else {
            $('#menu_zdd').css({
                top: 49,
                left:-92,
        })
}
})
           // 不滚动时设置高度
    var differ = document.querySelector('.nav-parent li:nth-child(3)')
    differ.addEventListener('mouseenter',function(){
        $('#menu_zdd').css({
            top: 49,
            left:-92,
        })
    })

// 底部微信鼠标悬停
$('.after').hover(function(){
    $(this).css({
        background:"url('./images/emindex30.png') no-repeat -99px -50px"
    })
    $(this).siblings('img').stop().show()
},function(){
  
    $(this).css({
        background:"url('./images/emindex30.png') no-repeat -99px 0"
    })
   
    $(this).siblings('img').stop().hide()

})

// 回到顶部的显示与隐藏

$(window)[0].addEventListener('scroll',function() {
    getLifter()
})
        
function getLifter () {
    if($(document).scrollTop()>=200){
        $('.m-lifter').stop().fadeIn()
    }else{
        $('.m-lifter').stop().fadeOut()
    }
}

// 点击按钮回到顶部
$('.m-lifter').hover(function(){
    $(this).css({
        background:"url('./images/scrolltop.png') no-repeat -42px -1px",
    })
},function(){
    $(this).css({
        background:" url('./images/scrolltop.png') no-repeat -2px -1px",
    })
})
$('.m-lifter').on('click',function(){
    $(document).scrollTop(0)
})

// 鼠标悬停分享
    $('.artical-all').on('mouseenter','.m-share',function(){
        $(this).find('.m-sina').css({
                    // background:"url('./images/emindex30.png') no-repeat 0 -50px",
                    background: "url('./images/emindex30.png') no-repeat 0 -50px"
                })
                $(this).find('.m-sina').siblings('span').css('color','#2ab9bf')
                return false;
    })
    $('.artical-all').on('mouseleave','.m-share',function(){
        
            $(this).find('.m-sina').css({
                        background: "url('./images/emindex30.png') no-repeat 0 0"
                    })
                    $(this).find('.m-sina').siblings('span').css('color','#000')
                    return false;
    })
// 点击文本框,文字消失
        $('.search input').focus(function() {
            $(this).val('')
        })
        $('.search input').blur(function() {
            $(this).val('请输入搜索内容')
        })

// 渲染页面封装函数
var articalAll = document.querySelector('.artical-all')
function getinfo (arr) {
    $('.artical-all').html('')
   arr.forEach(function(elem){
    var str =      
    // 图片 
    '<div class="m-artical">'+
    '<a href="javascript:;"> <img src="'+elem.img+'" alt=""></a>'+
    // 文字部分左边 
    '<h3><a href="javascript:;">'+elem.title+'</a></h3>'+
'<div class="m-artical-left fl">'+
    // '<p><a href="javascript:;">'+elem.info+'<span>'+' '+elem.author+'</span> </a><span>'+elem.time+'</span></p>'+
   ' <p><a href="javascript:;">'+elem.info+'</a><span> <a href="javascript:;">'+elem.author+'</a></span> <span>'+elem.time+'</span></p>'+
    '<p>'+elem.subtitle+'</p>'+
'</div>'+
'<div class="m-artical-right fr">'+
   ' <p class="m-like"><a href="javascript:;"></a><span>'+elem.num+'</span></p>'+
   ' <p class="m-share"><a href="javascript:;"><span class="m-sina"></span><span>分享</span></a></p>'+
' </div>'+
    '</div>'
    articalAll.insertAdjacentHTML('beforeend', str)
   })
}

// 不点击时,自动显示第一页
            var newArr = [];
            datas.filter(function(ele){
                if(ele.id==1){
                    newArr.push(ele)
                }
                getinfo(newArr)
            })
// 点击文本框,
$('.Page input').click(function(){
    $(this).css('background','#ccc').siblings().css('background','#eee')
    val = $(this).val();
    console.log(val)
    var clickArr = datas.filter(function(ele){
       return ele.id==val;
    })
    getinfo(clickArr)
    // 点击后自动转跳到距离
    $('html,body').animate({
        scrollTop : 810,
    })
})


































    })
   

