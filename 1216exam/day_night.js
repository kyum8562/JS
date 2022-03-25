var btn = document.querySelector('#nightnday');
var target = document.querySelector('body');

// set 객체 안에 메소드를 넣음
var set = {
    BodyBackgroundColor : function(color){
        // target.style.backgroundColor = color;   
        $('body').css('backgroundColor', color);
    },
    BodyColor : function(color){
        // target.style.color = color;
        $('body').css('color', color);
    },
    SpanColor : function SpanColor(color){
        // var alist = document.querySelectorAll('span');
        // var i = 0; 
        // while(i<alist.length){
        //     alist[i].style.color = color;
        //     i++;
        // }

        //jQuery를 활용한 코드 변경
        // $('span') -> 해당 페이지의 span 태그를 전부 제어
        $('span').css('color',color);
    }

}


function handleClick(){
    if(btn.value === 'night'){
        set.BodyBackgroundColor('black');
        btn.value = 'day';
        set.BodyColor('white');
        set.SpanColor('powderblue');
    }
    else{ 
        set.BodyBackgroundColor('white');
        btn.value = 'night';
        set.BodyColor('black');
        set.SpanColor('blue');    
  }
}

function init(){
    btn.addEventListener("click", handleClick);
    handleClick();
}

init();