const title = document.querySelector("#title");

const clicked_class = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(clicked_class);
    title.classList.toggle(clicked_class);
/*
    if(hasClass){
        title.classList.remove(clicked_class);
    }
    else{
        title.classList.add(clicked_class);
    }
*/
}
// 어플리케이션 초기화 함수 생성
function init(){
    title.addEventListener("click", handleClick);
}
// 어플리케이션 초기화
init();
