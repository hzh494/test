window.onload = function () {
    {//开始
        // 顶部导航栏
        let li = document.querySelectorAll('.c1');
        for (let j = 0; j < li.length; j++) {
            li[j].onmouseover = function () {
                this.children[0].style.display = 'none';
                this.children[2].style.display = 'block';
            }
            li[j].onmouseout = function () {
                this.children[0].style.display = 'block';
                this.children[2].style.display = 'none';
            }
        }
        $('.shopping').hover(function () {
            $(this).children('div').stop().slideToggle(300);
        });
        // 搜索框
        let box = document.querySelector('.box');
        let text = document.querySelector('.text');
        let conceal = document.querySelectorAll('.conceal')
        text.onfocus = function () {
            box.style.display = 'block';
            for (let i = 0; i < conceal.length; i++) {
                conceal[i].style.display = 'none';
            }
        }
        text.onblur = function () {
            box.style.display = 'none';
            for (let i = 0; i < conceal.length; i++) {
                conceal[i].style.display = 'block';
            }
        }

        // 图片左右点击按钮
        let b_left = document.querySelector('.b_left');
        let b_right = document.querySelector('.b_right');
        let b_ul = document.querySelector('.b_ul');
        let b_img = document.querySelectorAll('.b_ul img');
        let b_li = document.querySelectorAll('.b_ul li');
        let focusWidth = b_li[0].offsetWidth;
        let num = 0;
        b_right.onclick = function () {

            num++;

            if (num >= 3) {
                num = 3;
            }
            // 点击移动图片
            animation(b_ul, 0, -num * focusWidth, 200, 20);
        }
        b_left.onclick = function () {

            if (num <= 0) {
                num = 1;
            }
            console.log(num);
            num--;

            // 点击移动图片
            animation(b_ul, 0, -num * focusWidth, 200, 20);
        }

        // 视频
        let video = document.querySelector('.video')
        let video_1 = document.querySelector('video')
        let video_x = document.querySelector('.video_x')

        video.onclick = function () {
            video_1.style.display = 'block';
            video_x.style.display = 'block';
        }
        video_x.onclick = function () {
            video_1.style.display = 'none';
            video_x.style.display = 'none';
        }


        // 点击切换页面主题图片
        // 小图片的数组
        let img = ['xiaohei', 'jiguang', 'tiankong', 'chicha', 'zhuguang']
        // 大图片的数组
        let img_xiao = ['hei', 'ji', 'tian', 'chi', 'zhu']
        // 获取大图片的盒子
        let larger = document.getElementById('larger')
        // 获取选择颜色的按钮
        let c_img = document.querySelectorAll('.c_img');
        // 循环遍历
        for (let i = 0; i < c_img.length; i++) {
            // 给每一个选择颜色按钮注册点击事件
            c_img[i].onclick = function () {
                for (let i = 0; i < c_img.length; i++) {
                    c_img[i].style.border = '1px solid #ccc'
                }
                this.style.border = '1px solid red'
                // 选择当前标签的下一个子元素
                let x = this.children[0].src;
                // 截取字符串

                // let y = x.substr(98, 1);
                let y = x.substring(x.length - 5, x.length - 4);
                console.log(y);
                // 循环遍历更换每一个小图片
                for (let j = 1; j <= b_img.length; j++) {
                    // console.log(j);
                    // 更换每一个图片
                    b_img[j - 1].src = 'images/' + img[y - 1] + '_' + j + ".png";
                }
                // 点击更换按钮显示第一个大图
                larger.src = 'images/' + img_xiao[y - 1] + 1 + ".png";

                // 循环给每一个小图注册鼠标移入事件
                for (let i = 0; i < b_img.length; i++) {
                    b_img[i].onmouseenter = function () {
                        // 获取移入图片的路径
                        let img = this.src;
                        // console.log(img);
                        // 截取获得索引值
                        let index_str = this.src.lastIndexOf('_') + 1;
                        let new_str = this.src.substr(index_str, 1);

                        // console.log(new_str);
                        // 把移入图片的索引值赋值给大图
                        larger.src = 'images/' + img_xiao[y - 1] + new_str + ".png";
                        // console.log(larger.src);
                    }
                }

            }

            // 给每个小图片注册鼠标移入事件
            for (let i = 0; i < b_img.length; i++) {
                b_img[i].onmouseenter = function () {
                    let img = this.src;
                    // console.log(img);
                    let index_str = this.src.lastIndexOf('_') + 1;
                    let new_str = this.src.substr(index_str, 1);

                    // console.log(new_str);
                    larger.src = 'images/' + img_xiao[0] + new_str + ".png";
                    // console.log(larger.src);
                }
            }
        }


        // 左侧图片盒子跟随移动

        $(document).scroll(function () {
            let l_main = $(document).scrollTop();
            if (l_main > 160) {
                $('.l_main').css({
                    position: 'fixed',
                    top: 0
                })
            } else if (l_main <= 160) {
                $('.l_main').css({
                    position: 'absolute',
                    top: 160
                })
            }
            if (l_main > 320) {
                $('.l_main').css({
                    position: 'absolute',
                    top: 320
                })
            }
        });
        // // 到一定距离出现顶部固定导航
        $(document).scroll(function () {
            let distance = $(document).scrollTop();
            let fixation = $('.bookmark').offset().top;
            // 距离页面顶部的距离
            // console.log(distance);
            if (distance > 1207) {
                $('.fixation').addClass('top_nav_g');
                $('.icon-jiantou').css('display', 'block');
            }
            if (distance < 1207) {
                $('.fixation').removeClass('top_nav_g');
                $('.icon-jiantou').css('display', 'none');
            }

            let parameter = $('.parameter').offset().top;
            let packaging = $('.packaging').offset().top - 96;
            let history = $('.history').offset().top - 0.375;

            if (distance >= 0 && distance < parameter - 1) {
                $('.bookmark_a').addClass('bookmark_1');
            } else {
                $('.bookmark_a').removeClass('bookmark_1');
            }


            if (distance >= parameter - 1 && distance < packaging) {
                $('.bookmark_b').addClass('bookmark_1');
            } else {
                $('.bookmark_b').removeClass('bookmark_1');
            }

            if (distance >= packaging && distance < history) {
                $('.bookmark_c').addClass('bookmark_1');
            } else {
                $('.bookmark_c').removeClass('bookmark_1');
            }

            if (distance >= history) {
                $('.bookmark_d').addClass('bookmark_1');
            } else {
                $('.bookmark_d').removeClass('bookmark_1');
            }

        })

        // 购买数量
        let q_text = document.querySelector('.q_text')
        let btn_1 = document.querySelector('.btn_1')
        let btn_2 = document.querySelector('.btn_2')
        let sum = 1;
        btn_1.onclick = function () {
            sum++;
            q_text.value = sum;
            console.log(sum);
        }

        btn_2.onclick = function () {
            sum--;
            if (sum <= 1) {
                sum = 1;
            }
            q_text.value = sum;
            console.log(sum);
        }



        // 参数详情收起

        $('.b_a').click(function () {
            $('.b_hide').hide()
            $('.b_1').show()
            $('.b_2').hide()
        })
        $('.b_d').click(function () {
            $('.b_hide').show()
            $('.b_2').show()
            $('.b_1').hide()
        })

        // 商品详情收起
        $('.b_a_1').click(function () {
            $('.b_hide_1').hide()
            $('.b_1_1').show()
            $('.b_2_1').hide()
        })
        $('.b_d_1').click(function () {
            $('.b_hide_1').show()
            $('.b_2_1').show()
            $('.b_1_1').hide()
        })
    }//结束
    // 放大镜
    {
        // 获取当前滚动条减box的上边距
        var x = 0;
        function fns() {
            var l_main = $(document).scrollTop();
            if (l_main >= 160) {
                x = l_main - 160;
            }
            return x;
        }

        $(window).scroll(fns);

        // 放大镜
        let box = document.querySelector('.magnify')
        let img1 = document.querySelector('.img1')
        let img2 = document.querySelector('.img2')
        let zhe = document.querySelector('.zhe')
        let box1 = document.querySelector('.hide')


        // 给box设置一个移动事件
        box.onmouseover = function () {
            zhe.style.display = 'block';
            box1.style.display = 'block';
            img2.src = img1.src;
            // 设置遮罩盒子的移动范围
            let min_x = 0;
            let min_y = 0;

            let max_x = this.offsetWidth - zhe.offsetWidth;
            let max_y = this.offsetHeight - zhe.offsetHeight;

            // 给鼠标设置一个移动事件
            this.onmousemove = function (e) {
                let move_x = e.clientX;
                let move_y = e.clientY;
                let scrollTop = $(document).scrollTop();

                let l_main = document.getElementsByClassName("l_main")[0];
                move_x = e.clientX - l_main.offsetLeft - zhe.offsetWidth / 2;

                // 每次移动判断获取的位置
                move_y = e.clientY + scrollTop - (l_main.style.position == "fixed" ? scrollTop : l_main.offsetTop) - zhe.offsetHeight / 2;

                // 约束鼠标移动的位置
                move_x = move_x <= min_x ? min_x : move_x;
                move_x = move_x >= max_x ? max_x : move_x;

                move_y = move_y <= min_y ? min_y : move_y;
                move_y = move_y >= max_y ? max_y : move_y;
                zhe.style.left = move_x + 'px';
                zhe.style.top = move_y + 'px';

                // 左侧遮罩盒子移动的距离 : 左侧盒子的宽度 = 右侧图片移动的距离 ： 右侧图片的宽度
                // 右侧图片移动的距离  =  左侧遮罩盒子移动的距离 *  右侧图片的宽度  / 左侧盒子的宽度;
                img2.style.left = -move_x * img2.offsetWidth / box.offsetWidth + 'px';
                img2.style.top = -move_y * img2.offsetHeight / box.offsetHeight + 'px';

            }
        }
        // 离开隐藏
        box.onmouseout = function () {
            zhe.style.display = 'none';
            box1.style.display = 'none';
        }
    }

    // 浏览记录
    {
        let h_left = document.querySelector('.h_left')
        let h_right = document.querySelector('.h_right')
        let h_ul = document.querySelector('.h_ul')
        let h_li = document.querySelector('.h_ul li')
        let focusWidth = h_li.offsetWidth;
        let num = 0;
        // console.log(focusWidth * 4);
        h_right.onclick = function () {
            num++;

            if (num >= 1) {
                num = 1;
            }

            // 点击移动图片
            animation(h_ul, focusWidth * 4, -num * focusWidth * 4, 120, 20);
        }
        h_left.onclick = function () {
            num--;

            if (num <= 0) {
                num = 0;
            }

            // 点击移动图片
            animation(h_ul, focusWidth * 4, -num * focusWidth, 120, 20);
        }

    }

    // 回到顶部
    {
        $('.return_top').click(function () {
            $('body,html').animate({
                scrollTop: 0,
            })
        })
    }
    // 自选套餐tap栏
    {
        let tap = document.querySelectorAll('.set_top a');
        let set_bottom = document.querySelectorAll('.set_bottom')
        for (let i = 0; i < tap.length; i++) {
            tap[i].onclick = function () {
                for (var j = 0; j < tap.length; j++) {
                    tap[j].className = '';
                    set_bottom[j].style.display = 'none';
                }
                tap[i].className = 'a';
                set_bottom[i].style.display = 'block';
            }
        }
    }

    // 顶部tap栏
    {
        let enter = document.querySelectorAll('.enter');
        let layer = document.querySelectorAll('.layer');

        for (let i = 0; i < enter.length; i++) {
            enter[i].onmouseenter = function () {
                for (let j = 0; j < enter.length; j++) {
                    layer[j].style.display = 'none';
                }
                layer[i].style.display = 'block';
            }
            enter[i].onmouseleave = function () {

                layer[i].style.display = 'none';
            }
        }


        $('.enter').mouseenter(function () {
            $('.layer').stop().slideDown(300)
        })


    }
}
