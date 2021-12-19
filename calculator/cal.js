const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');

const btn1 = div3.querySelector('#btn1');
const btn2 = div3.querySelector('#btn2');
const btn3 = div3.querySelector('#btn3');

const btn4 = div2.querySelector('#btn4');
const btn5 = div2.querySelector('#btn5');
const btn6 = div2.querySelector('#btn6');

const btn7 = div1.querySelector('#btn7');
const btn8 = div1.querySelector('#btn8');
const btn9 = div1.querySelector('#btn9');

const btnPlus = div1.querySelector('#btnPlus');
const btnMinus = div2.querySelector('#btnMinus');
const btnMulti = div3.querySelector('#btnMulti');
const btnDiv = document.querySelector('#btnDiv');
const btnCal = document.querySelector('#btnCal');
const btnClear = document.querySelector('#btnClear');
var abc = document.querySelector('h2');
abc.innerText = 0;
var tmp = 0.0;
var result = 0.0;
var how ;

function clear2(num){
    if(abc.innerText === 0 || abc.innerText === "0"){
        abc.innerText  = num;
        return abc.innerText;
    }
    else{
        abc.innerText += num;
        return abc.innerText;
    }
}
function clear3(giho){
    tmp = Number(abc.innerText);
    abc.innerText = 0;
    how = `${giho}`;

    return tmp;
}

// const obj1 = {

// }
// var i = 1;
// while(i <= 9){
//  let a = `handleBtn${i}`;
//  function a(){
//      clear2(i);
//  }   
//  obj1.appendChild(a);
// }
// console.log(obj1);
const btnObj = {

    // 1~9 버튼 메소드
    handleBtn1: function(){
        clear2(1);
    },
    handleBtn2: function(){
        clear2(2);
    },
    handleBtn3: function(){
        clear2(3);
    },
    handleBtn4: function(){
        clear2(4);
    },
    handleBtn5: function(){
        clear2(5);
    },
    handleBtn6: function(){
        clear2(6);
    },
    handleBtn7: function(){
        clear2(7);
    },
    handleBtn8: function(){
        clear2(8);
    },
    handleBtn9: function(){
        clear2(9);
    },
    // 사칙연산, 클리어, 계산하기 메소드
    handleBtnPlus: function(){
        clear3("+")
    },
    handleBtnMinus: function(){
        clear3("-")
    },
    handleBtnMulti: function(){
        clear3("x")
    },
    handleBtnDiv: function(){
        clear3("/")
    },
    handleBtnClr: function(){
        abc.innerText = 0;
        return abc.innerText;
    },
    handleBtnCal: function(){
        if(how === "+"){
            result = (tmp) + Number(abc.innerText);
        }
        else if(how === "-"){
            result = tmp - Number(abc.innerText);
        }
        else if(how === "x"){
            result = tmp * Number(abc.innerText);
        }
        else if(how === "/"){
            result = tmp / Number(abc.innerText);
        }
        console.log(`first num : ${tmp}`);
        console.log(`second num : ${abc.innerText}`);
        console.log(`calculating : ${tmp} ${how} ${abc.innerText} = ${result}`);
        console.log(`result : ${result}`);
        abc.innerText = result;

        return result;
    }
}

function calculation(){
   
    btn1.addEventListener("click", btnObj.handleBtn1);
    btn2.addEventListener("click", btnObj.handleBtn2);
    btn3.addEventListener("click", btnObj.handleBtn3);
    btn4.addEventListener("click", btnObj.handleBtn4);
    btn5.addEventListener("click", btnObj.handleBtn5);
    btn6.addEventListener("click", btnObj.handleBtn6);
    btn7.addEventListener("click", btnObj.handleBtn7);
    btn8.addEventListener("click", btnObj.handleBtn8);
    btn9.addEventListener("click", btnObj.handleBtn9);
    
    btnClear.addEventListener("click", btnObj.handleBtnClr);
    btnPlus.addEventListener("click", btnObj.handleBtnPlus);
    btnMinus.addEventListener("click", btnObj.handleBtnMinus);
    btnMulti.addEventListener("click", btnObj.handleBtnMulti);
    btnDiv.addEventListener("click", btnObj.handleBtnDiv);
    btnCal.addEventListener("click", btnObj.handleBtnCal);

}

function load(){
   calculation();
    
}

function init(){
    load();
}

init();
