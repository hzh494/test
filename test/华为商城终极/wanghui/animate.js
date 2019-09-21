var timeID = null;
function animation(element, current, target, step, time) {
     
     current = element.offsetLeft;

     if(element.timeID) {
         clearInterval(element.timeID);
         element.timeID = null;
     }
     element.timeID = setInterval(function(){

          if(current > target) {
               step = -Math.abs(step);
          }
          if(Math.abs(current-target) <= Math.abs(step)) {
              current = target;
              clearInterval(element.timeID);
          }else {
               current += step;
          }
          element.style.left = current + 'px';
     },time)
}