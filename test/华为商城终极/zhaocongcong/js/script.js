window.onload=function(){


var noe=document.querySelector('.box .one');
var tow=document.querySelector('.box .tow');
var logo_one=document.querySelector('.logo .logo_one');
var logo_tow = document.querySelector('.logo .logo_tow')
logo_one.onmouseenter=function(){
    // console.log('aaa')
    noe.style.display='block';
};
   
logo_one.onmouseleave=function(){
    noe.style.display='none';
};
logo_tow.onmouseenter=function(){
    console.log('aaa')
     tow.style.display='block';
};
   
logo_tow.onmouseleave=function(){
     tow.style.display='none';
};


//按钮
var lbtn = document.querySelector('.btns a:nth-child(1)');
var rbtn = document.querySelector('.btns a:nth-child(2)');
//列表
var ul = document.querySelector('.box2 ul');
//小圆点
var dotteds = document.querySelector('.dotteds');

//1.页面加载显示小圆点
(function showDotteds() {
    for(var i = 0; i < ul.children.length; i++) {
         var span = document.createElement('span');
         if(i == 0) {
             span.className = 'active';
         }
         span.indexpage = i;
         
         span.onclick = move;
         dotteds.appendChild(span);
    }
})();
var index = 0;
//点击小圆点
function move() {
     index = this.indexpage;
     animation(ul, ul.offsetLeft, -index*1920,50, 20);
     dottedMove();
}

function dottedMove() {
  for(var i = 0; i < dotteds.children.length; i++) {
     console.log(dotteds[i])
      
       dotteds.children[i].className = '';
   }
   if(index == 3) {
      dotteds.children[0].className = 'active';
   }else {
      dotteds.children[index].className = 'active';
      console.log('span')
   }
}


  //将第一个li动态的复制到ul的末尾
var newNode = ul.firstElementChild.cloneNode(true); 
     ul.appendChild(newNode);

//点击下一页按钮
rbtn.onclick = f1;

function f1() {
   if(index == ul.children.length-1) {
       index = 0;
       ul.style.left = 0+'px';
   }
   index++;
   animation(ul, ul.offsetLeft, -index*1920,50, 20);
   //小圆点跟随改变
   dottedMove();
}



//点击上一页按钮
lbtn.onclick = function() {
    if(index == 0) {
       index = ul.children.length-1;
       ul.style.left = -index*1920+'px';
    }
    index--;
    animation(ul,ul.offsetLeft, -index*1920, 50, 20);
    dottedMove();
}


//自动播放
   var box2 = document.querySelector('.box2');


var timeId=null;
var btns=document.querySelector('.box2 .btns')
box2.onmouseenter=function(){
   btns.style.display='block';
   clearInterval(timeId);
}
box2.onmouseleave=function(){
    btns.style.display='none';
    timeId=setInterval(function(){
        f1();
     },3000);
 }


//  timeId=setInterval(function(){
//     f1();
//     // console.log("jj");
//  },1000);

var top11=document.getElementById('top11');
top11.onmouseenter=function(){
    // console.log('a');
    top11.classList.add("active");

}
top11.onmouseleave=function(){
    // console.log('a');
    top11.classList.remove("active");

}
var top2 =document.querySelector('.top2');
top2.onmouseenter=function(){
    
    top2.classList.add("active");
    

}
top2.onmouseleave=function(){
   
    top2.classList.remove("active");

}


 var lins= document.querySelectorAll('.lins a');
for(var i=0;i<lins.length;i++){
lins[i].onmouseenter=function(){
    
    this.classList.add("active");
  

}
lins[i].onmouseleave=function(){
   
    this.classList.remove("active");

}
}
var li =document.querySelectorAll('.iphone li');

    for(var i=0;i<li.length;i++){
        li[i].onmouseenter=function(){
             
    this.classList.add("active");
        // this.className='active';
        // console.log('aaa')
    }
    li[i].onmouseleave=function(){
   
        this.classList.remove("active");
    
    }
}
var li2 = document.querySelectorAll('.computer li');
for(var i=0;i<li.length;i++){
    li2[i].onmouseenter=function(){
         
this.classList.add("active");
    // this.className='active';
    // console.log('aaa')
}
li2[i].onmouseleave=function(){

    this.classList.remove("active");

}
}
var right=document.querySelector('.shoubiao .right')
var conter=document.querySelector('.shoubiao .conter')
var ul2=document.querySelector('.shoubiao ul')
var a = document.querySelector('.shoubiao span .a')

right.onclick=function(){
   ul2.style.left=-1190+'px';
  var n= a.innerText;
  a.innerText=2;

//    animation(ul2,ul2.offsetLeft, -1190+'px', 1190, 1000);
//    console.log(ul);
}
conter.onclick=function(){
    ul2.style.left=10+'px';
    var n= a.innerText;
    a.innerText=1;
    
 }
 var li3 = document.querySelectorAll('.shoubiao li');
for(var i=0;i<li.length;i++){
    li3[i].onmouseenter=function(){
         
this.classList.add("active");
   
}
li3[i].onmouseleave=function(){

    this.classList.remove("active");

}
}
}

$(function(){
    showDiv();

   function showDiv(){
       var topval = $(document).scrollTop();
       if(topval>$('.lins').offset().top){
           $('.fixedtool').fadeIn();

       }else{
        $('.fixedtool').fadeOut();
       }
   }
      $(window).scroll(function(){
          showDiv();
    

         var top=$(document).scrollTop();
           $('.aaaa>div').each(function(i,ele){
               if(top>$(ele).offset().top){
                  $('.fixedtool li').eq(i).addClass('curren').siblings().removeClass('curren');

               }
           });
    });

    $('.fixedtool li').click(function(){
           var indext=$(this).index();
           var topzhi=$('.aaaa>div').eq(indext).offset().top;
        // $(document).scrollTop(topzhi);
        $('body,html').animate({
                 scrollTop:topzhi

        },100,function(){
            $('.fixedtool li').eq(indext).addClass('curren').siblings().removeClass('curren');
        
    });
      

    //  $('.zcc').click(function(){
    //     //  $(window).scrollTop(0);
    //     console.log(123);
    //  });

});
$('.zcc').click(function(){
         $(window).scrollTop(0);
        console.log(123);
     });
});