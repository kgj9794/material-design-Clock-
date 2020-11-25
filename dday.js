const ddayContainer = document.querySelector(".js-dday");
const ddayTitle = ddayContainer.querySelector("h4");

function dday(){
const now = new Date();
const day = new Date("February 26, 2020");
const toGo = day.getTime() - now.getTime();
const days = Math.abs(Math.floor(toGo / (1000 * 60 * 60 * 24)));
  ddayTitle.innerText = `뚜아랑 만난지 ${days}일 😍`;
}


function init(){
   dday();

}

init();