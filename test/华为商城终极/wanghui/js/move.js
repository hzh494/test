
    // 动态获取span，添加到middle中
    var img_show=document.querySelector('.img_show');
    var ul=document.querySelector('ul');
    var middle=document.querySelector('.middle');
    var l_btn=document.querySelector('.l_btn');
    var r_btn=document.querySelector('.r_btn');
    var dott=document.querySelector('.dott')
    // 获取每张照片的宽度
    var img_w=document.querySelector('.box').children;
    var indexpage=0;

   //   1.页面加载显示小圆点
  (function createDott(){
    for(var i=0;i<ul.children.length;i++){
          var span=document.createElement('span');
          if(i==0){
              span.className='active';
          }
        //   给每一个span注册一个点击事件
        span.span_id=i;

        //调用span_click函数
        span.onclick=span_click;
          dott.appendChild(span);
      }
   })()

//    span_click函数为了实现点圆点图片可以移动
   function span_click(){
    pageindex=this. span_id;

    if(pageindex==4){
            pageindex = 0;
            ul.style.left = '0px';

        }
        // pageindex++;
        // 调用函数
        animation(ul,ul.offsetLeft, -pageindex*560,50,20);
        // 把小圆点固有样式去掉

        for(var i=0;i<dott.children.length;i++){
            dott.children[i].className='';
        }
        this.className='active';
        // dott.children[pageindex].className='active';
      
   }


      

    // 每次移动的位置=pageindex*560

    var pageindex=0;
    // 点击右侧，让盒子转起来
    r_btn.onclick=function(){

        if(pageindex==4){
            pageindex = 0;
            ul.style.left = '0px';

        }
        pageindex++;
        // 调用函数
        animation(ul,ul.offsetLeft, -pageindex*560,50,20);
        // 调用小圆点随着图片移动
        setDott();
        }

    //    点击左边的按钮，让盒子转起来
        l_btn.onclick=function(){

      if(pageindex==0){
       pageindex = 4;
        ul.style.left = -pageindex*560+'px';

      }
      pageindex--;
        // 调用函数
        animation(ul,ul.offsetLeft, -pageindex*560,50,20);
        // 调用小圆点随着图片移动
        setDott();
        }

        

     //将第一个li动态的复制到ul的末尾
     var newNode = ul.firstElementChild.cloneNode(true); 
     ul.appendChild(newNode);
     console.log(ul);

    //  设置小圆点的样式
     function setDott(){
            for(var i=0;i<dott.children.length;i++){
            dott.children[i].className='';
            if(pageindex==4){
               dott.children[0].className='active';
           }else{
               dott.children[pageindex].className='active';

           }
         }
        }




//  自动播放
var time_id=null;
box.onmouseenter=function(){
    clearInterval(time_id);
}

box.onmouseleave=function(){
    autoplay()
}

// 自动播放函数
function autoplay(){
    time_id=setInterval(function(){
    r_btn.click();
},1000)

}
