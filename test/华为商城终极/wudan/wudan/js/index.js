/*
功能:
1.头部栏卷起时(滚动条滚动事件)tab栏固定在页面顶部
2.tab栏切换功能
3.卷起区块1的同时(滚动条滚动事件)tab栏自动切换到"区块2:电脑办公",以此类推
4.点击底部栏的返回顶部按钮,页面立刻回到头部栏,同时tab栏位置回到原位置
5.产品区有鼠标进入添加类关于hover的效果,图片放大,文字部分背景色变为黑色,当鼠标离开,恢复原样
*/
$(function () {
  // 注意:box_tab到顶部的距离只能在卷起事件外获取并保存给一个变量top_box,因为在滚动事件中给它加定位类的时候原距离被定义为0,
  // 导致只有向下滚动的时候可以实现固定在指定位置的效果,而从下滚向上的时候固定定位仍存在
  var top_box = $('.box_tab').offset().top;
  // 1.给页面添加卷起事件
  $(window).scroll(function () {
    // 获取页面卷起的距离
    var valTop = $(document).scrollTop();
    // 当页面卷起的距离大于或等于box_tab距离顶部距离时,把box_tab的定位变为固定定位,当页面卷起的距离大于等于0且小于等于banner高度的时候,恢复原位置
    if (valTop >= top_box) {
      $('.box_tab').css('position','fixed');
    }
    if (valTop <= 760 && valTop >= 0) {
      $('.box_tab').css('position','');
    }
  });
  // 2.点击tab栏中tab_list项,每一项添加active类,对应的contain中每一个子盒子切换功能
  $('.tab_list').children().click(function () {
    var i = $(this).index();//用来获取当前被点击事件源的索引值  
    // tab_list的每一项被点击时,都会加active这个类,同时它的兄弟删除这个类,实现了只给当前加样式的效果
    $(this).addClass('active').siblings().removeClass('active');
    // 让对应的contain中的子盒子出现在指定的位置
    var div_topZ = $(this).parents('.box_tab').siblings('.contain').children().eq(i).offset().top+1+'px';
    // div_topZ表示contain中每个子盒子到顶部的距离,把整个值设置给页面的scrollTop这个属性
    $('body,html').animate({
      scrollTop : div_topZ
    });
  });
  // 3.页面滚动到contain中的哪个子盒子,对应的tab_list中的li也会加active类
  $(window).scroll(function () {
    var topZhi = $(document).scrollTop();
    $('.contain>div').each(function (index,elm) {
      if (topZhi >= $(elm).offset().top) {
        $('.tab_list').children().eq(index).addClass('active').siblings().removeClass('active');
      }
    });
  });
  // 4.给回到顶部按钮添加点击事件,点击时让页面回到顶部
  $('.footer .btns .Top').click(function () {
    $('body,html').animate({
      scrollTop : 0
    });
  });
  // 5.鼠标进入btns中的任意一个,添加动画效果
  $('.btns>span').hover(function () {
    $(this).css('background','#146df6');
  },function () {
    $(this).css('background','');
  });
  $('.btns span:nth-child(1)').mouseenter(function () {
    $(this).find('em').css('margin-left',70);
  });
  $('.btns span:nth-child(1)').mouseleave(function () {
    $(this).find('em').css('margin-left','');
  });
  $('.btns span:nth-child(2)').mouseenter(function () {
    $(this).find('em').css('fontSize',70);
  });
  $('.btns span:nth-child(2)').mouseleave(function () {
    $(this).find('em').css('fontSize','');
  });
  // 6.给区块1-4的box添加鼠标悬停的效果
  $('.contain .box').hover(
    function () {
    $(this).css({paddingLeft:15,paddingRight:15});
    $(this).children('.key_words').css('background','black').siblings('.img_box').stop().fadeTo(300,1);
    $(this).children('.key_words').children('h1').css('color','#fff');
  },function () {
    $(this).children('.key_words').css('background','').siblings('.img_box').stop().fadeTo(300,0.5);
    $(this).children('.key_words').children('h1').css('color','');
    $(this).css({paddingLeft:'',paddingRight:''});
  });
    // 7.给区块五的box添加鼠标进入和离开的效果
  $('.fashion .box').mouseenter(function () {
    $(this).children('.img_box').children('img').css({transform:'scale('+1.2+')'},{transition:0.3+'s'});
    $(this).css('box-shadow','5px 5px 5px #888');
  });
  $('.fashion .box').mouseleave(function () {
    $(this).children('.img_box').children('img').css({transform:''},{transition:0.3+'s'});
    $(this).css('box-shadow','');
  });
  // 8.给区块五的big_box添加鼠标进入和离开的效果
  $('.fashion .big_box').mouseenter(function () {
    $(this).children('.img_box').children('img').css({transform:'scale('+1.2+')'},{transition:0.5+'s'});
    $(this).css('box-shadow','5px 5px 5px #888');
  });
  $('.fashion .big_box').mouseleave(function () {
    $(this).children('.img_box').children('img').css({transform:''},{transition:0.5+'s'});
    $(this).css('box-shadow','');
  });
  // 9.进入document的时候让banner下滑
  $(document).mouseenter(function () {
    $('.banner').slideDown(1500);
  })
  // 10.给推荐和爆款小图标加效果
  var tj1_img = document.querySelector('.tj1 img');
  var tj2_imgs = document.querySelectorAll('.tj2 img');
  var bk_imgs = document.querySelectorAll('.bk img');
  var body = document.body;
  var rotated = 0;
  var fn;
  body.onmouseenter = function () {
    window.clearInterval(fn);
    setInterval(function fn() {
      rotated += 360;
      tj1_img.style.transform = 'rotateY(' + rotated +'deg)';
      tj1_img.style.transition = 1 + 's';
      tj2_imgs[0].style.transform = 'rotateY(' + rotated +'deg)';
      tj2_imgs[0].style.transition = 1 + 's';
      tj2_imgs[1].style.transform = 'rotateY(' + rotated +'deg)';
      tj2_imgs[1].style.transition = 1 + 's';
      bk_imgs[0].style.transform = 'rotateX(' + rotated +'deg)';
      bk_imgs[0].style.transition = 1 + 's';
      bk_imgs[1].style.transform = 'rotateX(' + rotated +'deg)';
      bk_imgs[1].style.transition = 1 + 's';
    },1000);
  }

  // 10.点击荣耀专区按钮,让ads大图下滑
  $('.footer .btns .Next').click(function () {
    $('.ads').slideToggle(2000);
  })

});// is $(function(){})  --- end
