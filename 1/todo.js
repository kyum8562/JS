// home의 elements 불러오는 상수 
const todoForm = document.querySelector(".js-todoForm"),
      todoInput = todoForm.querySelector("input"),
      todoList = document.querySelector(".js-todoList");

// todoArr : todoList를 담을 배열 , todo_LS : LS의 key값 명
let todoArr = [];
const todo_LS = "todoList";

// 반영된 결과를 저장
function saveList(){
    // todoArr(배열)을 저장하기 위해서 JSON으로 변경해주고 저장
    localStorage.setItem(todo_LS, JSON.stringify(todoArr));
}

// dleBtn click시 event 발생
function handleDelete(event){
    // event가 발생한 버튼을 변수로 둠
    const btn = event.target;
    // 버튼의 부모노드(li)를 변수로 둠
    const li = btn.parentNode;
    // event가 발생한 li를 todoList에서 제거(html에서 제거)
    todoList.removeChild(li);
    console.log(todoList);

    // 위의 결과값을 LS에서도 제거
    const cleanToDo = todoArr.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    todoArr = cleanToDo;
    saveList();
}

// 작성한 value를 
function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
}

// element를 생성(li,button,span),  li를 todoList에 넣어줌
function paintTodo(text){
    // element를 생성(li,button,span), newId 생성
    const li = document.createElement("li");
    const dleBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todoArr.length +1;
    
    dleBtn.innerText = "⚡";
    // dleBtn 클릭시 handleDelete 함수 실행
    dleBtn.addEventListener("click", handleDelete);
    span.innerText = text;
    // li에 button,span을 넣어주고 id를 newId로 변환
    li.appendChild(span);
    li.appendChild(dleBtn);
    li.id = newId;

    // todoList에 li 넣어줌
    todoList.appendChild(li);
    // todoArr를 오브젝트 형태로 넣어줌
    const todoObj = {
        text : text,
        id: newId
    };
    todoArr.push(todoObj);
    saveList();
}

// 입력된 key값 명을 불러오는 함수 loadList() 
function loadList(){
    const loadedList = localStorage.getItem(todo_LS);
    // loadedList가 있다면
    if (loadedList !==  null){
        // LS에 저장된 array(String)를 JS 객체로 변환 후 paintTodo에 넘겨줌
        const parsedloadedList = JSON.parse(loadedList);
        parsedloadedList.forEach(function(todo){
            paintTodo(todo.text);
        })

    }
    
}
    
// 초기화 함수 init()
function init(){
    // debugger;
    loadList();
    // todoList 작성 후 enter시(submit) event 발생
    todoForm.addEventListener("submit", handleSubmit);

}

init();