$(function () {
    // var arr=[];//用于存账号密码对象
    //点击切换注册模式
    $(".sjzc").click(function () {
        $(this).css("background-color", "#B40707").siblings(".yxzc").css("background-color", "#CCCCCC").parent().siblings(".main_m").show().siblings(".main_two").hide();
    })
    $(".yxzc").click(function () {
        $(this).css("background-color", "#B40707").siblings(".sjzc").css("background-color", "#CCCCCC").parent().siblings(".main_m").hide().siblings(".main_two").show();
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////手机号注册
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //选择国家#####################
    $(".count_r").click(function () {
        $(this).children(".xzcount").stop().slideDown().css("z-index", 10);

    })
    $(".xzcountb_list li").click(function () {
        var count_v = $(this).text();
        $(this).parents(".count_r").find(".gj").text(count_v);
    });

    $(".xzcount").mouseleave(function () {
        $(this).stop().slideUp();
    })
    //遍历头部字母,给点击颜色
    $(".cycount span ").each(function (index, ele) {
        $(this).click(function () {
            $(this).css("color", "#1c3149").siblings().css("color", "rgb(153, 153, 153)");
        })

    })

    //手机号地区选择###################
    $(".phone_l").click(function () {
        $(this).find(".phone_list").stop().slideDown().css("z-index", 10)
    })
    $(".phone_list span").click(function () {
        var phe_v = $(this).text();
        $(this).parents(".phone_l").find(".phe").text(phe_v);
        // $(this).css("backgrund","#1c3149").siblings().css("backgrund","#fff");
    });
    $(".phone_list").mouseleave(function () {
        $(this).stop().slideUp();
    })
    //手机号验证#######################
    $(".phone_r input").focus(function () {
        $(this).val("");
        $(this).siblings("span").text("");
    })
    $(".phone_r input").blur(function () {
        var ary = [];
        var pheone = $(this).val();
        // console.log(pswone);
        var regPhone = new RegExp(/^1[3|4|5|7|8][0-9]{9}$/);
        //获取本地存储
        var str = localStorage.getItem("namepsw");
        var arr = JSON.parse(str);
        //遍历每个对象中的账号存入新数组
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "object") {
                for (var name in arr[i]) {

                }
                ary.push(arr[i].name);
            }
        }
        //  console.log(arr)
        //判断账号是否存在于本地存储    
        if (ary.indexOf(pheone) == -1) {
            if (regPhone.test(pheone)) {
                $(this).siblings("span").text("手机号可用").css("color", "green");
            } else {
                $(this).siblings("span").text("请输入正确手机号");
            }

        } else {

            $(this).siblings("span").text("手机号已被注册").css("color", "red");

        }

    })
    /////手机号验证码#############################
    $(".phe_yzm_r").click(function () {
        var count = 60;

        timeID = setInterval(function () {
            count--;
            $(".phe_yzm_r").text(count + "s");
            if (count == 0) {

                $(".phe_yzm_r").text("重新发送验证码");
                clearInterval(timeID);
                count = 60;
            }
            // console.log(count)
        }, 1000)
        // console.log(count)
    })
    //密码格式等级验证##################################3
    $(".psw_r input").focus(function () {
        $(this).val("");
        $(this).siblings("span").text("");
    })
    $(".psw_r input").blur(function () {
        var pswValue = $(this).val();
        // console.log(pswone);
        var reg1 = new RegExp(/\d+/); //数字
        var reg2 = new RegExp(/[a-zA-Z]/); //字母
        var reg3 = new RegExp(/(?=[\x21-\x7e]+)[^A-Za-z0-9]/); //键盘上除数字及字母的其他字符
        if (pswValue == "") {
            $(this).siblings("span").text("密码不能为空").css("color", "red");
            return;
        }

        if (pswValue.length >= 6 && pswValue.length <= 16) {
            //  $(this).siblings("span").text("");
            if (reg2.test(pswValue) && reg1.test(pswValue) && reg3.test(pswValue)) {
                $(this).siblings("span").text("密码强度：强").css("color", "green");
            } else if ((reg2.test(pswValue) && reg1.test(pswValue)) || (reg2.test(pswValue) && reg3.test(pswValue)) || (reg3.test(pswValue) && reg1.test(pswValue))) {
                $(this).siblings("span").text("密码强度：中").css("color", "orange");
            } else if (reg2.test(pswValue) || reg1.test(pswValue)) {
                $(this).siblings("span").text("密码强度：弱").css("color", "red");
            } else {
                $(this).siblings("span").text("密码格式不正确");

            }
        } else {
            $(this).siblings("span").text("密码长度应为6-18位").css("color", "red");
        }
    })

    //密码比对验证#####################
    $(".yzpsw_r input").focus(function () {
        $(this).val("");
        $(this).siblings("span").text("");

    })
    $(".yzpsw_r input").blur(function () {
        var pswtwo = $(this).val();
        var pswValue = $(this).parents(".yzpsw").siblings(".psw").find("input").val();
        if (pswtwo == "") {
            $(this).siblings("span").text("密码不能为空").css("color", "red");
            return;
        }
        if (pswtwo == pswValue) {
            // $(this).siblings("span").text("");
            $(this).siblings("span").text("两次密码一致").css("color", "green");

        } else {
            $(this).siblings("span").text("两次密码输入不一致").css("color", "red");

        }

    })

    //出生日期######################（不是必填，登录验证时不需要必须选择,不验证）
    $('#mydatepicker').dcalendarpicker(); //初始化日期选择器
    $('#mycalendar').dcalendar(); //初始化日历   
    $('#mydatepicker').dcalendarpicker({
        format: 'yyyy-mm-dd'
    });


    ////手机登录行为验证码
    $(".xv_yz").one("click", function () { //如果验证成功后不可再点击验证

        // })
        // $(".xv_yz").click(function () {
        $(this).children(".widgets__img_check_box").show();
        // yz();
        // function yz(){
        var s = WIDGETS.imgSmoothCheck({
            selector: "#select",
            data: ["images/t1.png", "images/t2.png", "images/t3.png"],
            imgHeight: 100,
            imgWidth: 200,
            allowableErrorValue: 3,
            success: function () {
                // alert("成功");
                $(".widgets__img_check_box").hide();

                $(".xv_yz").find("span").text("验证成功").css("color", "green");
                // s.refresh();
            },
            error: function (res) {
                $(".xv_yz").find("span").text("重新失败，重新验证").css("color", "red");
                // s.refresh();
            }
        });
        $(".widgets__smooth_circle").on("click", function () {
            // s.refresh();
            return false; //不知道干什么的 反正加上好使，避免点击更新验证
        });

        // }
    })

    ////////////手机号注册按钮///////////////////////移到登录界面
    // var ary = [];
    /////////////////////////////////////////
    //先在本地存储找数据
    // var str = localStorage.getItem("namepsw");
    // //没有数据加数据
    // if (str == null) {
    //     localStorage.setItem("namepsw", '[{"name": "15245629319", "psw":"123456789"}]')
    //     str = localStorage.getItem("namepsw");
    // }
    // //把字符串转成数组
    // var arr = JSON.parse(str)
    ///////////////////////////////////////////

    var arr = []; //存储从本地获取的账号密码数组对象
    var new_str = localStorage.getItem("namepsw");
    arr = JSON.parse(new_str) //改成数组形式
    $(".zcbtn").click(function () {

        if (($(".psw_r span").text() == "密码强度：强" || $(".psw_r span").text() == "密码强度：中" || $(".psw_r span").text() == "密码强度：弱") && ($(".yzpsw_r span").text() == "两次密码一致") && ($(".button_text_container").text() == "验证成功") && ($(".phone_r span").text() == "手机号可用")) {

            /////////////////////////
            //存储新数据
            arr.push({
                "name": $(".phone_r input").val(),
                "psw": $(".psw_r input").val()
            })
            str = JSON.stringify(arr);
            localStorage.setItem("namepsw", str) //保存数据
            // str = localStorage.getItem("namepsw"); //获取数据
            // arr = JSON.parse(str); //变成数组

            //第二版 临时数据
            // sessionStorage.setItem('username', $(".phone_r input").val());
            // sessionStorage.setItem('psw', $(".psw_r input").val());

            alert("注册成功");
            window.open("login.html");
            console.log(1)
        } else {
            alert("请检查信息是否正确")
        }
        console.log(5)
    })

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //邮箱注册页
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //选择国家#####################
    $(".count_r_two").click(function () {
        $(this).children(".xzcount_two").stop().slideDown().css("z-index", 10);

    })
    $(".xzcountb_list_two li").click(function () {
        var count_v = $(this).text();
        $(this).parents(".count_r_two").find(".gj_two").text(count_v);
    });

    $(".xzcount_two").mouseleave(function () {
        $(this).stop().slideUp();
    })
    //遍历头部字母,给点击颜色
    $(".cycount_two span ").each(function (index, ele) {
        $(this).click(function () {
            $(this).css("color", "#1c3149").siblings().css("color", "rgb(153, 153, 153)");
        })

    })

    //邮箱号格式验证##################
    $(".eml_r_two input").focus(function () {
        $(this).val("");
        $(this).siblings("span").text("");
    })
    $(".eml_r_two input").blur(function () {
        var ary = [];
        var emlval = $(this).val();
        // console.log(pswone);
        var regPhone = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);

        var str = localStorage.getItem("namepsw");
        var arr = JSON.parse(str);
        //遍历每个对象中的账号存入新数组
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "object") {
                for (var name in arr[i]) {
                }
                ary.push(arr[i].name);
            }
        }
        // console.log(ary)
        if (ary.indexOf(emlval) == -1) {
            if (regPhone.test(emlval)) {
                $(this).siblings("span").text("邮箱可用").css("color", "green");
            } else {
                $(this).siblings("span").text("请输入正确邮箱").css("color", "red");
            }
        } else {

            $(this).siblings("span").text("邮箱号已被注册").css("color", "red");

        }


    })
    ///邮箱验证码
    $(".eml_yzm_r_two").click(function () {
        var count = 60;

        timeID = setInterval(function () {
            count--;
            $(".eml_yzm_r_two").text(count + "s");
            if (count == 0) {

                $(".eml_yzm_r_two").text("重新发送验证码");
                clearInterval(timeID);
                count = 60;
            }
            // console.log(count)

        }, 1000)

        // console.log(count)

    })

    //密码格式验证############################
    $(".psw_r_two input").focus(function () {
        $(this).val("");
        $(this).siblings("span").text("");
    })
    $(".psw_r_two input").blur(function () {
        var pswValue = $(this).val();
        // console.log(pswone);
        var reg1 = new RegExp(/\d+/);
        var reg2 = new RegExp(/[a-zA-Z]/);
        var reg3 = new RegExp(/(?=[\x21-\x7e]+)[^A-Za-z0-9]/);
        if (pswValue == "") {
            $(this).siblings("span").text("密码不能为空").css("color", "red");
            return;
        }

        if (pswValue.length >= 6 && pswValue.length <= 16) {
            //  $(this).siblings("span").text("");
            if (reg2.test(pswValue) && reg1.test(pswValue) && reg3.test(pswValue)) {
                $(this).siblings("span").text("密码强度：强").css("color", "green");
            } else if ((reg2.test(pswValue) && reg1.test(pswValue)) || (reg2.test(pswValue) && reg3.test(pswValue)) || (reg3.test(pswValue) && reg1.test(pswValue))) {
                $(this).siblings("span").text("密码强度：中").css("color", "orange");
            } else if (reg2.test(pswValue) || reg1.test(pswValue)) {
                $(this).siblings("span").text("密码强度：弱").css("color", "red");
            } else {
                $(this).siblings("span").text("密码格式不正确");

            }
        } else {
            $(this).siblings("span").text("密码长度应为6-18位").css("color", "red");
        }
    })
    //密码比对验证#####################
    $(".yzpsw_r_two input").focus(function () {
        $(this).val("");
        $(this).siblings("span").text("");

    })
    $(".yzpsw_r_two input").blur(function () {
        var pswtwo = $(this).val();
        var pswValue = $(this).parents(".yzpsw_two").siblings(".psw_two").find("input").val();
        if (pswtwo == "") {
            $(this).siblings("span").text("密码不能为空").css("color", "red");
            return;
        }
        if (pswtwo == pswValue) {
            $(this).siblings("span").text("两次密码一致").css("color", "green");

        } else {
            $(this).siblings("span").text("两次密码输入不一致").css("color", "red");

        }

    })

    ///////////////////
    //点击验证，行为式验证
    $('#mpanel5').pointsVerify({
        defaultNum: 4, //默认的文字数量
        checkNum: 2, //校对的文字数量
        vSpace: 5, //间隔
        imgName: ['1.jpg', '2.jpg'],
        imgSize: {
            width: '422px',
            height: '150px',
        },
        barSize: {
            width: '422px',
            height: '20px',
        },
        ready: function () {},
        success: function () {

            //......后续操作
        },
        error: function () {
            //alert('验证失败！');
        }

    });

    ////邮箱注册按钮
    $(".zcbtn_two").click(function () {

        if (($(".psw_r_two span").text() == "密码强度：强" || $(".psw_r_two span").text() == "密码强度：中" || $(".psw_r_two span").text() == "密码强度：弱") && ($(".yzpsw_r_two span").text() == "两次密码一致") && ($(".verify-msg").text() == "验证成功") && ($(".eml_r_two span").text() == "邮箱可用")) {

            /////////////////////////
            //存储新数据
            arr.push({
                "name": $(".eml_r_two input").val(),
                "psw": $(".psw_r_two input").val()
            })
            str = JSON.stringify(arr);
            localStorage.setItem("namepsw", str)
            str = localStorage.getItem("namepsw");
            arr = JSON.parse(str)

            //第二版 临时数据
            // sessionStorage.setItem('username', $(".phone_r input").val());
            // sessionStorage.setItem('psw', $(".psw_r input").val());

            alert("注册成功");
            window.open("login.html");
            console.log(1)
        } else {
            alert("请检查信息是否正确")
        }

        // console.log(5)

    })

    /////////已有账号，登录//////////////////
    $(".yyzh").click(function () {
        window.open("login.html", "_self");

    })
})