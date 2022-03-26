const body = document.querySelector("body");

const IMG_NUMBER = 5;


function paintImg(imgNum){
    const img = new Image();
    img.src = `img/image${imgNum}.jpg`;
    img.classList.add("bgImage");
    console.log(img.src);
    body.appendChild(img);
}

function genRandom(){
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNum =  genRandom();
    paintImg(randomNum);
}

init();