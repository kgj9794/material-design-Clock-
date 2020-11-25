const weather = document.querySelector(".js-weather");

const API_KEY = "0849334613d7f1ea12dfb124b5b53003";
const COORDS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
return response.json();
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText=`현재 온도는 '${temperature} ℃' @ 현재위치는 '${place}' 입니다.`
  });

}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){

}

function askForCoords(){
navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
  const loadedcoords = localStorage.getItem(COORDS);
  if(loadedcoords === null){
    askForCoords();
  }
  else{
    const parsedCoords = JSON.parse(loadedcoords);
  getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();

}

init();