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
abc.innerText = "";
var tmp = 0.0;
var result = 0.0;
var how = "";

function plus(a, b){
    return a+b;
}

function minus(a, b){
    return a-b;
}

function multi(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}
const btnObj = {
    // 1~9 버튼 메소드
    handleBtn1: function(){
        abc.innerText += "1";
        console.log(abc.innerText);
        return abc.innerText;
    },
    handleBtn2: function(){
        abc.innerText += "2";
        console.log(abc.innerText);
        return abc.innerText;
    },
    handleBtn3: function(){
        abc.innerText += "3";
        return abc.innerText;
    },
    handleBtn4: function(){
        abc.innerText += "4";
        return abc.innerText;
    },
    handleBtn5: function(){
        abc.innerText += "5";
        return abc.innerText;
    },
    handleBtn6: function(){
        abc.innerText += "6";
        return abc.innerText;
    },
    handleBtn7: function(){
        abc.innerText += "7";
        return abc.innerText;
    },
    handleBtn8: function(){
        abc.innerText += "8";
        return abc.innerText;
    },
    handleBtn9: function(){
        abc.innerText += "9";
        return abc.innerText;
    },
    // 사칙연산, 클리어, 계산하기 메소드
    handleBtnClr: function(){
        abc.innerText = "";
        return abc.innerText;
    },
    handleBtnPlus: function(){
        tmp = Number(abc.innerText);
        abc.innerText = "";
        how = "+";
        
        return tmp;
    },
    handleBtnMinus: function(){
        tmp = Number(abc.innerText);
        abc.innerText = "";
        how = "-";

        return abc.innerText;
    },
    handleBtnMulti: function(){
        tmp = Number(abc.innerText);
        abc.innerText = "";
        how = "x";

        return abc.innerText;
    },
    handleBtnDiv: function(){
        tmp = Number(abc.innerText);
        abc.innerText = "";
        how = "/";

        return abc.innerText;
    },
    handleBtnCal: function(){
        if(how === "+"){
            result = (tmp) + Number(abc.innerText);
        }
        if(how === "-"){
            result = tmp - Number(abc.innerText);
        }
        if(how === "x"){
            result = tmp * Number(abc.innerText);
        }
        if(how === "/"){
            result = tmp / Number(abc.innerText);
        }
        console.log(`first num : ${tmp}`);
        console.log(`second num : ${abc.innerText}`);
        console.log(`calculating : ${tmp} ${how} ${abc.innerText} = ${result}`);
        console.log(`result : ${result}`);
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
