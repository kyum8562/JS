const weather = document.querySelector(".js-weather");
const API_KEY = "f6fe93b9639c92a2f1d0d9888f6c39a7";
const COORDS = 'coords';

function getWeather(lat,log){
    // fetch를 통해서 현재 지역의 lat,log, metric, API_KEY를 통해 api를 가져오고 
    // then을 통해 
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
        console.log(temp);
    })
}

// LS에 저장하는 함수
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


//좌표를 가져오는데 실패했을 때
function handleGeoError(){
    console.log("Can't acces geo location !");
}
//좌표를 가져오는데 성공했을 때
function handleGeoSucces(position){
    // 위도와 경도 읽어오기
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    // 객체에 위도, 경도 저장
    const coordsObj = {
        latitude,
        longitude   
    };
    // LS에 저장하기
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
     
}

// 좌표를 요청하는 함수
function askForCoords(){
    //좌표 요청하는 API
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

// 좌표를 불러오는 함수
function loadCoords(){
    const loadedCoordes = localStorage.getItem(COORDS);
    if(loadedCoordes === null){
        askForCoords();
    }
    else{
        //getWeather
        const parseCoords = JSON.parse(loadedCoordes);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

// 초기화 함수
function init(){
    loadCoords();
}

init();