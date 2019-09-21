// 函数动画终结版
        
        //该函数能够获取任意 style 标签中属性的属性值
        function getStyle(element, attr) {
            //使用三元运算符来判断浏览器支持哪个版本    element是元素对象，attr是一个字符串
            return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
        }


        //element 是元素的对象， attr 是getStyle()需要获取值的属性名，target 是目标位置
        function animate(element, json, speed, fn) {
            //每点击一个按钮都会清理一个定时器
            clearInterval(element.timeId);
            //使用 element,timeId 是为了只创建一个定时器内存地址，同时也将 timeId 添加到 element 的一个属性中，作为属性
            element.timeId = setInterval(function () {
                var flag = true;
                for (var attr in json) {
                    //判断是不是透明度属性
                    if (attr == "opacity") {
                        //获取 style 标签中 透明度 的属性值,并扩大一百倍
                        var current = getStyle(element, attr)*100;
                        //获取 目标的透明度扩大一百倍
                        var target = json[attr]*100;
                        //定义一个每次走的步数
                        var step = (target - current) / 10;

                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        //每次缩小的数字
                        current = step + current;
                        //设置透明度，并缩小一百倍
                        element.style[attr] = current/100;
                    } 
                    // 判断是不是层级属性
                    else if (attr == "zIndex") {
                        //层级改变就是直接改变这个属性的值
                        element.style[attr]=json[attr]; 
                    }
                    // 判断是不是其他的属性 
                    else {
                        //获取 style 标签中 attr 的属性值,赋给 current 作为当前位置
                        var current = parseInt(getStyle(element, attr))||0;
                        //获取 对象中 属性的属性值
                        var target = json[attr];
                        //定义一个每次走的步数
                        var step = (target - current) / 10;

                        step = step > 0 ? Math.ceil(step) : Math.floor(step);
                        //每次移动后的距离
                        current = step + current;
                        //元素离移动的距离
                        element.style[attr] = current + "px";
                    }
                    //判断所有的对象是否到达目标位置
                    if (current != target) {
                        flag = false;
                        if (fn) {
                            fn();
                        }
                    }
                }
                //判断有没有到达目标位置
                if (flag) {
                    //清理定时器
                    clearInterval(element.timeId);
                }
                console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动的步数:" + step);
            }, speed)
        }