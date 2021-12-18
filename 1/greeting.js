// home의 elements 불러오는 상수 
const greetingForm = document.querySelector(".js-greetingForm"),
      greetingInput = greetingForm.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

// USER_LS : LS에서 가져오는 key값 명, SHOWING_CN : if에 따른 탈부착
const USER_LS = "currentUser",
      SHOWING_CN ="showing"; // 기본값은 none 이지만 showing 붙이면 block

// 이름을 LS에 저장함
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// event의 default(새로고침)를 제거, 입력값을 paintGreeting, saveName에 넘겨줌
function handleSubmit(event){
     event.preventDefault();
     const currentValue = greetingInput.value;
     paintGreeting(currentValue);
     saveName(currentValue);
}

// 폼을 보여주고 enter시(submit) hadleSubmit 실행
function askForName(){
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);
}

// 이름을 입력하면 form 없애고 h4 출력
function paintGreeting(text){
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hello ${text}`  
}

// 입력된 key값 명을 불러오는 함수 loadName()
function loadName(){
    // USER_LS(LS의 key값 명)을 가져옴
    const currentUser = localStorage.getItem(USER_LS);
    // currentUser 없다면 입력한 값 LS에 저장
    if(currentUser === null){
        askForName();
    }
    // currentUser 있다면, 화면에 표시
    else{
        paintGreeting(currentUser);
    }
}

// 초기화 함수 init()
function init(){
    loadName();

}

init(); 