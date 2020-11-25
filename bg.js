const body = document.querySelector("body");
//원하는 숫자로 바꾼다.
const IMG_NUMBER = 7;



function paintImage(imgNumber){
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom(){
  const number = Math.floor(Math.random() * 7);
  return number;
}


function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
