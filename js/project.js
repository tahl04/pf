$(document).ready(function(){
    let d_width = 0; // 브라우저 가로
    let d_height = 0; // 문서 전체의 높이

    
    function tmp() {
        // container의 가로사이즈(화면가로 * box 개수)
        let con_width = $(window).outerWidth() * $('section').length; 

        $('#project').css({
            width: con_width,
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0
        });

        // css에서 해도 상관없다.
        $('section').css({
            width: con_width / $('section').length,
            height: '100vh',
            float: 'left'
        });

        // box들을 위로 끌어올렸기 때문에 body의 높이는 100vh나 마찬가지인 상태. 
        // 그래서 억지로 전체 box들의 세로크기 만큼 body에 줘야한다.(스크롤 내리기위함) 
        // 이때 높이는 가로영역의 비율과 동일하게 준다. (이후 리미트를 주게 됨으로써 비율의 값이 정해진다.)
        $('body').css({
            height: '100vh'
        });

        let w_width = $(window).width(); // 화면의 가로값
        let w_height = $(window).height() // 화면의 세로값

        // 스크롤 될때의 리미트
        d_width = con_width - w_width; // 전체 가로값 - 현재 화면의 가로값
        d_height = $('body').height() - w_height // 전체 세로값 - 현재 화면의 세로값
    }

    tmp();

    let array = [];
    for(let i=0; i<$('section').length; i++) {
        array[i] = $('section').eq(i).offset().left
    }

    let chk = true;
    $('section').on('mousewheel DOMMouseScroll', function(){

        if(chk) {
            // 휠 일정시간동안 막기
            chk = false;
            setTimeout(function(){
                chk = true;
            }, 500)

            // 휠 방향 감지(아래: -120, 위: 120)
            let w_delta = event.wheelDelta / 120;
            
            // 휠 아래로
            if(w_delta < 0 && $(this).next().length > 0) {
                $('#project').animate({
                    left: -array[$(this).index()+1]
                }, 500)
            }
            // 휠 위로
            else if(w_delta > 0 && $(this).prev().length > 0) {
                $('#project').animate({
                    left: -array[$(this).index()-1]
                }, 500)
            }
        }
    });

    

    //브라우저를 resize했을시를 대비해 박스의 크기는 다시 구해준다.
    $(window).resize(function(){
        for(let i=0; i<$('section').length; i++) {
            array[i] = $('section').eq(i).offset().left
        }
        location.reload();
        tmp();
    })


    let startPoint = 0;
    let endPoint = 0;
    
    
    $('section').on("touchstart", (e) => {
        // console.log("touchstart", e.touches[0].pageX);
        startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
      });
      $('section').on("touchend", function(e) {
        // console.log("touchend", e.changedTouches[0].pageX);
        endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
        if (startPoint < endPoint) {
            $('#project').animate({
                left: -array[$(this).index()-1]
            }, 500)
        // console.log("오른쪽");
        } else if (startPoint > endPoint) {
            // 왼쪽으로 스와이프 된 경우
            $('#project').animate({
                left: -array[$(this).index()+1]
            }, 500)
            // console.log("왼쪽");
        }
    });

});
