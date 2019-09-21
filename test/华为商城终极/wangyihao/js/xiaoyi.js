$('.shop_nb ul').hover(function () {
    $(this).find('.shop_img').toggle();
    $(this).find('.shop_two').toggle();
    console.log(1);
})

// 聊天

$('.trouble li').click(function () {

    // 大盒子
    var btn = $('<div></div>').addClass('js_btn clearfix');

    // 通栏
    var chat = $('<div></div>').addClass('js_chat');

    var float_div = $('<div></div>').addClass('js_float_div');
    var img = $('<img src="./img/智能小艺/tu1.png">').addClass('js_img');
    var span = $('<span></span>').text($(this).text()).addClass('js_span');


    // 回答

    // 通栏
    var hd_div = $('<div></div>').addClass('huida_div');
    // 放span img
    var div = $('<div></div>').addClass('hd_div');

    var hd_span = $('<span></span>').html($('.hide_box span').html()).addClass('hd_span');


    var hd_img = $('<img src="./img/智能小艺/tu2.png">').addClass('hd_img');


    // 内容滚动到底部
    $(document).ready(function () {
        $('.chat_two').scrollTop($('.chat_two')[0].scrollHeight);
    })


    $('.chat_two').append(btn);
    $(btn).append(chat);
    $(chat).append(float_div);
    $(float_div).append(span);
    $(float_div).append(img);

    $(btn).append(hd_div);
    $(hd_div).append(div);
    $(div).append(hd_img);
    $(div).append(hd_span);

})




$(document).ready(function () {
//     var websocket = new WebSocket("ws://echo.websocket.org/");
//     websocket.onopen = function () {
//         console.log("open 了");
//     }
//     websocket.close = function () {
//         console.log("close 了");
//     }
//     websocket.onmessage = function (e) {
//         console.log('接收到消息 #### ', e.data);
//     }


//     $('.chat_two').scrollTop($('.chat_two')[0].scrollHeight);
//     $('.inp').keypress(function (event) {
//         var key = event.which;

        // // 监听回车事件
        // if (key == 13) {
        //     // console.log('输入的内容 ', event.target.value);
        //     var tw_box = $('<div></div>').addClass('tw_box');
        //     // 通栏
        //     var tw_span = $('<span></span>').addClass('tw_span');
        //     // 动态添加span
        //     var dt_div = $('<div></div>').addClass('dt_div');
        //     // 获取输入框内容
        //     var tml = $('.inp').val();
        //     var tw_img = $('<img src="./img/智能小艺/tu1.png">').addClass('tw_img');


        //     $('.chat_two').append(tw_box);
        //     $(tw_box).append(tw_img);
        //     $(tw_box).append(tw_span);
        //     $(tw_span).append(dt_div);
        //     $(dt_div).append(tml);
            
        //     $('.inp').val('');
        //     //发送聊天内容
        //     websocket.send(tml);
        // }
//     });







    // // input点击事件
    $('.inp_1').click(function () {
        // 大盒子
        var tw_box = $('<div></div>').addClass('tw_box clearfix');
        // 通栏
        var tiwen_span = $('<span></span>').addClass('tiwen_span');
        // 动态添加span
        var dt_div = $('<div></div>').addClass('dt_div');
        // 获取输入框内容
        

        console.log(tw_img);
        var tw_span = $('.inp').val();

        var tw_img = $('<img src="./img/智能小艺/tu1.png">').addClass('tw_img');
        console.log(tw_span);

        


        // // 回答
        var zn_div = $('<div></div>').addClass('zn_div');
        console.log(zn_div);

        // 放span img
        var div = $('<div></div>').addClass('hd_div');

        
        var zn_img = $('<img src="./img/智能小艺/tu2.png">').addClass('zn_img');
        var zn_span = $('<span></span>').html($('.zn_box p').html()).addClass('zn_span');

       

        // 发出问题
        $('.chat_two').append(tw_box);
        $(tw_box).append(tiwen_span);

        $(tiwen_span).append(tw_img);
        $(tiwen_span).append(dt_div);
        
        $(dt_div).text(tw_span);
        $('.inp').val('');
        
    

        // 回答问题
        $(tw_box).append(zn_div);
        $(zn_div).append(div);

        $(div).append(zn_img);
        $(div).append(zn_span);


        
        
    

        

        // $('.chat_two').append(tw_box);
        // $(tw_box).append(tw_span);
        // $(tw_span).append(dt_div);
        // $(dt_div).append(tml);
        // $(tw_span).append(tw_img);
        // $('.inp').val('');
        // //发送聊天内容
        // websocket.send(tml);
        
    })

})        

// // 监听回车事件
//         if (key == 13) {
//             // console.log('输入的内容 ', event.target.value);
//             var tw_box = $('<div></div>').addClass('tw_box');
//             // 通栏
//             var tw_span = $('<span></span>').addClass('tw_span');
//             // 动态添加span
//             var dt_div = $('<div></div>').addClass('dt_div');
//             // 获取输入框内容
//             var tml = $('.inp').val();
//             var tw_img = $('<img src="./img/智能小艺/tu1.png">').addClass('tw_img');


//             $('.chat_two').append(tw_box);
//             $(tw_box).append(tw_img);
//             $(tw_box).append(tw_span);
//             $(tw_span).append(dt_div);
//             $(dt_div).append(tml);
            
//             $('.inp').val('');
//             //发送聊天内容
//             websocket.send(tml);
//         }
var s = $('<div>ashdsajh</div>');
console.log(s);







