//--------------------------------绑定事件的兼容代码-------------------------------------------------------

//伪元素添加绑定事件, fn是函数
// element 是需要操作的元素对象     type是不带 "on" 的事件名称，格式为 "字符串"     fn 是函数名
function addEventListener(element, type, fn) {
    //判断浏览器是否支持这个方法
    if (element.addEventListener) {
        // 兼容谷歌，火狐
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        // 兼容IE
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}

//为元素解绑事件，element 是需要操作的元素对象    type是不带 "on" 的事件名称，格式为 "字符串"     fnName是函数名
function removeEventListener(element, type, fnName) {
    //判断浏览器是否支持这个方法
    if (element.removeEventListener) {
        // 兼容谷歌，火狐
        element.removeEventListener(type, fnName, false);
    } else if (element.datachEvent) {
        // 兼容IE
        element.datachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}


// -------------------innerText 和  textContent 设置和获取的兼容代码---------------------------------------------

//设置任意标签中间的任意文本内容
// element 是需要操作的元素对象    text 是需要添加的文本内容
function setInnerText(element, text) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}

//获取任意标签中间的文本内容     
//element 是需要操作的元素对象
function getInnerText(element) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}


// ------------------------获取第一个子元素和最后一个子元素的兼容代码--------------------------------------------

// 1：获取任意一个父元素的第一个子元素，解决 IE 浏览器的兼容问题
// element 是 父元素的对象
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

// 2：获取任意一个父元素的最后一个子元素，解决 IE 浏览器的兼容问题
function getLastElementChild(element) {
    if (element.lasttElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}



//--------------------------获取向上卷曲和向左卷曲的坐标的兼容问题---------------------------------------------------

//封装函数
function getScroll() {
    //使多种浏览器兼容 scroll 
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop ||
            document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft ||
            document.body.scrollLeft || 0
    };
}

//因为 getScroll() 返回的是一个对象，可以直接使用
//getScroll().scrollTop  获取 scroll_Top 属性值
//getScroll().scrollLeft  获取 scroll_left 属性值
//一般使用 window.onscroll = function () {}  结合使用



//--------------------------获取 style 标签元素中属性的兼容代码-----------------------------------------------

//该函数能够获取任意 style 标签中属性的属性值
// element 是需要操作的元素对象    attr 是 style 中属性名，格式为 "字符串"
function getStyle(element, attr) {
    //使用三元运算符来判断浏览器支持哪个版本    element是元素对象，attr是一个字符串
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

//--------------------------------兼容 window.evet.  和  e.------------------------------------------------
//在函数 function (内置对象) {}  存在有隐藏对象， window.event.  IE 谷歌兼容，  e 谷歌和火狐兼容
function getEvent(e) {
    return window.event || e;
}


//-----------------------------------封装常用的兼容代码-----------------------------------
    //把代码放在一个对象中
    var evt = {
      //window.event和事件参数对象e的兼容
      getEvent: function (evt) {
        return window.event || evt;
      },
      //可视区域的横坐标的兼容代码
      getClientX: function (evt) {
        return this.getEvent(evt).clientX;
      },
      //可视区域的纵坐标的兼容代码
      getClientY: function (evt) {
        return this.getEvent(evt).clientY;
      },
      //页面向左卷曲出去的横坐标
      getScrollLeft: function () {
        return window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0;
      },
      //页面向上卷曲出去的纵坐标
      getScrollTop: function () {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
      },
      //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
      getPageX: function (evt) {
        return this.getEvent(evt).pageX ? this.getEvent(evt).pageX : this.getClientX(evt) + this.getScrollLeft();
      },
      //相对于页面的纵坐标(pageY或者是clientY+scrollTop)
      getPageY: function (evt) {
        return this.getEvent(evt).pageY ? this.getEvent(evt).pageY : this.getClientY(evt) + this.getScrollTop();
      }
    };