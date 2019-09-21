window.onload = function () {
    //隐藏警告栏
    // var gbwarn=document.querySelector(".gbwarn");
    // var s_warn=document.querySelector(".s_warn");
    // var s_main=document.querySelector(".s_main");
    // gbwarn.onclick=function(){
    //     s_warn.className="s_warn  hide "
    //     // s_main.style.height="660px"
    // }

//点击切换登录模式
    var zhdl = document.getElementById("zhdl");
    var smdl = document.getElementById("smdl");
    var s_main_bop = this.document.querySelector(".s_main_bop")
    var s_main_bom = this.document.querySelector(".s_main_bom")
    zhdl.onclick = function () {
        s_main_bop.className = "s_main_bop show";
        s_main_bom.className = " s_main_bom hide";
    }
    smdl.onclick = function () {
        s_main_bom.className = "s_main_bom  show";
        s_main_bop.className = "s_main_bop hide";
    }



//手机号/邮箱格式验证
    var yzname = document.querySelector(".yzname");
    var ninput = document.getElementById('username');
    var pswinput = document.getElementById("password");
    var yzpsword = document.querySelector(".yzpsw");

  
 
ninput.onblur = function () {
        
        for (var k = 0; k < ary1.length; k++) {
            //判断账号是否存在于本地存储  
            if (ninput.value == "") {
                yzname.innerHTML = "账号不能为空"

            } else {
                if (ary1.indexOf(ninput.value) == -1) {
                    yzname.innerHTML = "账号未注册"

                } else {
                    yzname.innerHTML = ""
                    // yzname.innerHTML = "账号可用"
                    // yzname.style.color = "green"
                }
            }
        }
        // console.log(ary1)

    }


ninput.onfocus = function () {
        this.value = "";
        
        yzname.innerHTML = "";
        pswinput.value = "";
        yzpsword.innerHTML = ""
        
    }

//密码格式验证
    var password = document.getElementById("password");
    var yzpsword = document.querySelector(".yzpsw");

    password.onblur = function () {
        //第一版 ，验证格式
        // yzpsw();
        // if (!ninput.value == "") {
        //     if (pswinput.value == upsw) {
        //         yzpsword.innerHTML = "密码正确";
        //         yzpsword.style.color = "green"
        //     } else {
        //         yzpsword.innerHTML = "密码错误"
        //     }
        // } else {
        //     yzpsword.innerHTML = "用户名不能为空"

        // }
        var idxname = ary1.indexOf(ninput.value); //查找输入账号位置
        var idxpsw = ary2.indexOf(pswinput.value); //查找输入密码位置
        for (var k = 0; k < ary2.length; k++) {
            //判断账号是否存在于本地存储  
            if (ninput.value == "") {
                yzpsword.innerHTML = "密码不能为空"

            } else {
                if (ary2[idxname] == pswinput.value) {
                    yzpsword.innerHTML = "密码正确"
                    yzpsword.style.color = "green"
                    

                } else {
                    yzpsword.innerHTML = "密码错误，请重新输入"
                    yzpsword.style.color = "red"
                }
            }
        }
        // console.log(ary1)

    }
    password.onfocus = function () {
        this.value = "";
        yzpsword.innerHTML = "";
        pswinput.value="";
    }


//验证码验证
    var vcode = document.getElementById("vcode");
    var code_btn = document.getElementById('code');
    var yzmxx = document.querySelector(".yzmxx");

    vcode.onblur = function () {
        keys();
    }
    vcode.onfocus = function () {
        this.value = "";
        yzmxx.innerHTML = "";
    }

//点击刷验证码
    var code_btn = document.getElementById('code');
    getCode(); //确保第一次进入页面有验证码显示
    code_btn.onclick = function () {
        getCode();

    }


//登录条件验证/////////////////////////////////////////
    var s_login_btn = document.getElementById("s_login_btn");
    var unameinput = document.getElementById("username");
    var pswinput = document.getElementById("password");

    var ary1 = []; //存储账号
    var ary2 = []; //存储密码
    var str = localStorage.getItem("namepsw");
    //没有数据加数据，默认数据
    if (str == null) {
        localStorage.setItem("namepsw", '[{"name": "15245629319", "psw":"123456789"}]')
        str = localStorage.getItem("namepsw");
    }
  
    var arr = JSON.parse(str);  //把字符串转成数组
    for (var i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "object") {
            for (var name in arr[i]) {
                // console.log( arr[i].name)
            }
            for (var psw in arr[i]) {
                // console.log( arr[i].psw)
            }

            ary1.push(arr[i].name);
            ary2.push(arr[i].psw);
        }
    }


    console.log(ary1)
    console.log(ary2)
    
//登录按钮事件  判断账号是否存在且密码是否域账号对应及验证码是否正确
//  var  ary3=[];
s_login_btn.onclick = function () {

        // ###################################
        var idxname = ary1.indexOf(ninput.value); //查找输入账号位置
        var idxpsw = ary2.indexOf(pswinput.value); //查找输入密码位置
        // console.log(idxname)
        // console.log(idxpsw)
        var checkbox = document.getElementById("checkbox");

        if (!(ary1.indexOf(ninput.value) == -1) && (ary2[idxname] == pswinput.value) && (yzmxx.innerHTML == '验证成功')) {

            // if (checkbox.checked) {
            //     // console.log(1);
            //     ary3.push({"name":unameinput.value}); 
            //     console.log(ary3)
            //     str = JSON.stringify(ary3);
            //     localStorage.setItem("uname", str)
            //     str = localStorage.getItem("uname");
            //     ary3 = JSON.parse(str)
          
                
            // }

            alert("登录成功")

        } else {
            alert("密码不正确，登录失败")
            // alert("登录成功")
        }
        console.log(ary3)


    }


//     var arrzh = localStorage.getItem("uname");//获取从本地存储获取的对象
//     var ary3=JSON.parse(arrzh);//存储对象转化后的数组
//     var ary33=[];//存储提取对象遍历后的数组即数组形式账号
//     console.log(ary3)
// //按键抬起判断账号名是否为记住密码的账号(有bug)
// ninput.onkeyup = function () {
//     var idxname = ary1.indexOf(ninput.value); //查找输入账号位置        
//     if(ary3.length==0){
//       console.log(123)
//     }else{
//     for (var i = 0; i < ary3.length; i++) {
//         if (typeof ary3[i] == "object") {
//             for (var name in ary3[i]) {
//                 // console.log( arr[i].name)
//             }
//             ary33.push(ary3[i].name);
                       
//         }
//     }
//         console.log(ary33);
//         //记住密码的账号直接给出密码且密码输入框禁用
//         if (!(ary33.indexOf(ninput.value) == -1)) {
//             // console.log(123)
//             // console.log(ary2[idxname])
//             // console.log(pswinput)
//             pswinput.value = ary2[idxname];
//             pswinput.disabled = true;
//         }else{
//             pswinput.value ="";            
//             pswinput.disabled = false;
            
//         }
//     }

//     }
    //切换后二维码特效
    var ewmbox = document.querySelector(".ewmbox");
    var ewm = document.querySelector(".ewm");
    var smjc = this.document.querySelector(".smjc");
    ewmbox.onmouseenter = function () {
        ewm.style.transform = "translateX(-80px) ";
        smjc.style.opacity = 1;

    }
    ewmbox.onmouseleave = function () {
        ewm.style.transform = "translateX(0px) ";
        ewm.style.left = 110 + "px";
        smjc.style.opacity = 0;

    }


}





/////////////////////////////////////////////////////////////
//手机号及邮箱格式验证
// function yzphone() {
//     var ninput = document.getElementById('username');
//     var nValue = ninput.value;
//     var yzname = document.querySelector(".yzname");
//     var regPhone = new RegExp(/^1[3|4|5|7|8][0-9]{9}$/); //开头必须是1 
//     var regEmail = new RegExp(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i);
//     // console.log(nValue);

//     if (regPhone.test(nValue) || regEmail.test(nValue)) {
//         yzname.innerHTML = "";
//     } else {
//         yzname.innerHTML = "请输入正确手机号/邮箱";
//     }
// }

//密码格式及安全等级验证  带等级条
// function yzpsw() {
//     var pswinput = document.getElementById("password");
//     var pswValue = pswinput.value;
//     var yzpsword = document.querySelector(".yzpsw");

//     //正则判断密码格式
//     var reg1 = new RegExp(/[a-zA-Z]/); //大小写字母
//     var reg2 = new RegExp(/\d/); //数字
//     var reg3 = new RegExp(/(?=[\x21-\x7e]+)[^A-Za-z0-9]/) //除字母和数字外键盘上所有字符
//     // console.log(reg3.test(pswValue))
//     if ((pswValue.length >= 6 && pswValue.length <= 16) && (reg2.test(pswValue) || reg1.test(pswValue))) {
//         yzpsword.innerHTML = "";
//         // console.log("密码长度正确");
//         // if (reg2.test(pswValue) && reg1.test(pswValue) && reg3.test(pswValue)) {
//         //     yzpsword.innerHTML = "<i>密码强度：强</i><span></span>"
//         //     var pswspan = yzpsword.querySelector("span");
//         //     var pswi = yzpsword.querySelector("i");
//         //     pswi.className = "fl";
//         //     console.log(pswspan)
//         //     pswspan.style.display = "block";
//         //     pswspan.className = "fl";
//         //     pswspan.style.width = 120 + "px";
//         //     pswspan.style.height = 5 + "px";
//         //     pswspan.style.backgroundColor = "red";
//         //     pswspan.style.marginTop = 10 + "px";
//         // } else if ((reg2.test(pswValue) && reg1.test(pswValue)) || (reg2.test(pswValue) && reg3.test(pswValue)) || (reg3.test(pswValue) && reg1.test(pswValue))) {
//         //     yzpsword.innerHTML = "<i>密码强度：中</i><span></span>"
//         //     var pswspan = yzpsword.querySelector("span");
//         //     var pswi = yzpsword.querySelector("i");
//         //     pswi.className = "fl";
//         //     console.log(pswspan)
//         //     pswspan.style.display = "block";
//         //     pswspan.className = "fl";
//         //     pswspan.style.width = 80 + "px";
//         //     pswspan.style.height = 5 + "px";
//         //     pswspan.style.backgroundColor = "red";
//         //     pswspan.style.marginTop = 10 + "px";
//         // } else if (reg2.test(pswValue) || reg1.test(pswValue)) {
//         //     yzpsword.innerHTML = "<i>密码强度：弱</i><span></span>"
//         //     var pswspan = yzpsword.querySelector("span");
//         //     var pswi = yzpsword.querySelector("i");
//         //     pswi.className = "fl";
//         //     console.log(pswspan)
//         //     pswspan.style.display = "block";
//         //     pswspan.className = "fl";
//         //     pswspan.style.width = 40 + "px";
//         //     pswspan.style.height = 5 + "px";
//         //     pswspan.style.backgroundColor = "red";
//         //     pswspan.style.marginTop = 10 + "px";
//         // }
//     } else {
//         yzpsword.innerHTML = "密码错误";

//     }
// }
//生成随机验证码
function getCode() {
    var arr = new Array(
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    );
    code = ''; //重新初始化验证码

    //随机从数组中获取四个元素组成验证码
    for (var i = 0; i < 4; i++) {
        //随机获取一个数组的下标
        var r = parseInt(Math.random() * arr.length);
        code += arr[r];
        //console.log(arr[r]);
    }
    console.log(code)
    var code_btn = document.getElementById('code');
    code_btn.innerHTML = code;


}

//验证码格式验证
function keys() {
    var code_btn = document.getElementById('code');
    var vcode = document.getElementById("vcode");
    var yzmxx = document.querySelector(".yzmxx");
    var yzValue = vcode.value.toUpperCase();
    var codes = code_btn.innerHTML.toUpperCase();
    console.log(codes);
    // console.log(yzValue)
    if (yzValue == "") {
        yzmxx.innerHTML = '验证码不能为空';
    } else if (yzValue == codes) {
        yzmxx.innerHTML = '验证成功';
        yzmxx.style.color = "green"

    } else {
        yzmxx.innerHTML = '验证码不正确，请重新输入';
        yzValue = ' ';
        getCode();
    }
}