const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const clockTitle2 = clockContainer.querySelector("h3");

var d = new Date();

var week = new Array('일', '월', '화', '수', '목', '금', '토');

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const fullyear = date.getFullYear();
  const getmonth = date.getMonth();
  const getdate = date.getDate();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  clockTitle2.innerText = `${fullyear}년 ${getmonth+1}월 ${getdate}일  (${week[d.getDay()]})`;


 
}


function init(){
  getTime();
  setInterval(getTime, 1000);

}

init();

