 var oBox = document.getElementById("box");
 var bigBox = document.getElementById("bigBox");
 var bigImg = document.getElementsByTagName("img")[1];
 var mark;
 //当鼠标划上时，创建小盒子；把小盒子放进页面；让大盒子显示；
 oBox.onmouseenter = function() {
     mark = document.createElement("div");
     mark.id = "mark";
     oBox.appendChild(mark);
     bigBox.style.display = "block";
 }
 // 当鼠标移动时，让小盒子移动，并且让大盒子中的图片跟着鼠标移动而移动；比例值是1:2;并且方向相反；
 oBox.onmousemove = function(e) {
     var minL = 0;
     var maxL = oBox.offsetWidth - mark.offsetWidth - 2;
 
     var minT = 0;
     var maxT = oBox.offsetHeight - mark.offsetHeight - 2;
  
     var curL = e.clientX - oBox.offsetLeft - mark.offsetWidth / 2;
     var curT = e.clientY - oBox.offsetTop - mark.offsetHeight / 2;

     if (curL <= minL) {
         curL = minL;
     }
     if (curL >= maxL) {
         curL = maxL;
     }
     if (curT <= minT) {
         curT = minT;
     }
     if (curT >= maxT) {
         curT = maxT;
     }
     mark.style.left = curL + "px";
     mark.style.top = curT + "px";
     // mark 和大图片移动距离存在2倍的关系；
     bigImg.style.left =  -2* curL + "px";
     bigImg.style.top =  -2* curT + "px";
 }
 // 当鼠标移出，小盒子消失大盒子也消失；
 oBox.onmouseleave = function() {
     oBox.removeChild(mark);
     bigBox.style.display = "none";
 }





 $(function () {
    $(".zz").on("click", function () {
        $(".bg").addClass("document_mask").css("display", "block");
        $(".tankuang").css("display","block");
    })

    $(".tankuang").on("mousedown",function(e){
        var x=e.clientX-$(".tankuang").offset().left;
        var y=e.clientY-$(".tankuang").offset().top;
        $(document).on("mousemove",function(e){
            var x_x=e.clientX-x-75;
            var y_y=e.clientY-y-55;
            console.log(x,y);
            $(".tankuang").css({
                left:x_x,
                top:y_y
            })
        })
    }).on("mouseup",function(){
        $(document).off("mousemove");
    })
    $(".close").on("click",function(){
        $(".bg").removeClass("document_mask")
        $(".tankuang").css("display","none");
    })
})
