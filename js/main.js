// main.js
 
 $(function(){

    // 2단계 메뉴
    $('#main_gnb .depth2').hide();

    $('#main_gnb > .depth1 > li').hover (
        function(){
            $(this)
                    .children('.depth2')
                    .stop().slideDown()
    
        },
        function(){
            $('#main_gnb .depth2').stop().slideUp();
        }
    )
    
    // 비주얼 슬라이드
    $('#visual .slider').bxSlider({
        // 옵션
        auto: true, // 자동재생(true, false)
        mode: "fade", // 효과종류(fade, vertical, horizontal)
    })

     // 새로고침해도 0번은 보이게
     $('.r-container img').hide();
     $('.r-container .r-txt').hide();  
     $('.r-container img').eq(0).show();
     $('.r-container .r-txt').eq(0).show();
     $('.r-container ul li a.selected').css('color', '#993b42');
     $('.r-container ul li').eq(0).css('border-bottom', '2px solid #993b42');


    // 클릭
    $('.r-container ul li a.selected').click(function(){
        // 원래 스타일로 돌려 놓기
        $('.r-container ul li a').css('color', '#9b8777');
        $('.r-container ul li').css('border-bottom', 'none');

        $('.r-container ul li a.selected').css('color', '#993b42');
        $('.r-container ul li').eq(0).css('border-bottom', '2px solid #993b42');

        $('.r-container img').addClass('play');
        $('.r-container .r-txt').addClass('play');

        $('.r-container img').eq(0).show();
        $('.r-container img').eq(1).hide();
        $('.r-container img').eq(2).hide();
        $('.r-container img').eq(3).hide();
        $('.r-container .r-txt').eq(0).show();
        $('.r-container .r-txt').eq(1).hide();
        $('.r-container .r-txt').eq(2).hide();
        $('.r-container .r-txt').eq(3).hide();
        return false;
    })
    $('.r-container ul li a.selected2').click(function(){
        $('.r-container ul li a').css('color', '#9b8777');
        $('.r-container ul li').css('border-bottom', 'none');

        $('.r-container ul li a.selected2').css('color', '#993b42')
        $('.r-container ul li').eq(1).css('border-bottom', '2px solid #993b42')

        $('.r-container img').addClass('play');
        $('.r-container .r-txt').addClass('play');

        $('.r-container img').eq(0).hide();
        $('.r-container img').eq(1).show();
        $('.r-container img').eq(2).hide();
        $('.r-container img').eq(3).hide();
        $('.r-container .r-txt').eq(1).show();
        $('.r-container .r-txt').eq(0).hide();
        $('.r-container .r-txt').eq(2).hide();
        $('.r-container .r-txt').eq(3).hide();
        return false;
    })
    $('.r-container ul li a.selected3').click(function(){
        $('.r-container ul li a').css('color', '#9b8777');
        $('.r-container ul li').css('border-bottom', 'none');

        $('.r-container ul li a.selected3').css('color', '#993b42')
        $('.r-container ul li').eq(2).css('border-bottom', '2px solid #993b42')

        $('.r-container img').addClass('play');
        $('.r-container .r-txt').addClass('play');

        $('.r-container img').eq(0).hide();
        $('.r-container img').eq(1).hide();
        $('.r-container img').eq(2).show();
        $('.r-container img').eq(3).hide();
        $('.r-container .r-txt').eq(0).hide();
        $('.r-container .r-txt').eq(1).hide();
        $('.r-container .r-txt').eq(2).show();
        $('.r-container .r-txt').eq(3).hide();
        return false;
    })
  
    $('.r-container ul li a.selected4').click(function(){
        $('.r-container ul li a').css('color', '#9b8777');
        $('.r-container ul li').css('border-bottom', 'none');

        $('.r-container ul li a.selected4').css('color', '#993b42')
        $('.r-container ul li').eq(3).css('border-bottom', '2px solid #993b42')

        $('.r-container img').addClass('play');
        $('.r-container .r-txt').addClass('play');

        $('.r-container img').eq(0).hide();
        $('.r-container img').eq(1).hide();
        $('.r-container img').eq(2).hide();
        $('.r-container img').eq(3).show();
        $('.r-container .r-txt').eq(0).hide();
        $('.r-container .r-txt').eq(1).hide();
        $('.r-container .r-txt').eq(2).hide();
        $('.r-container .r-txt').eq(3).show();
        return false;
    })

      
});

   