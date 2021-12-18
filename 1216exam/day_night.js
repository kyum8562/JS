var btn = document.querySelector('#nightnday');
var target = document.querySelector('body');

function handleClick(){
    if(btn.value === 'night'){
    target.style.backgroundColor = 'black';
    target.style.color = 'white';
    btn.value = 'day';
    var alist = document.querySelectorAll('span');
    var i = 0; 
    while(i<alist.length){
        alist[i].style.color = 'powderblue';
        i++;
    }
    }
    else{ 
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
    btn.value = 'night';

    var alist = document.querySelectorAll('span');
    var i = 0;
    while(i<alist.length){
        alist[i].style.color = 'darkgreen';
        i++;
    }
  }
}

function load(){
    btn.addEventListener("click", handleClick);
    handleClick();
}

function init(){
    load();
}

init();