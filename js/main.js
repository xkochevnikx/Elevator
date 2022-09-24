let current = 0;
let elev = document.querySelector("#elevator");
let btn1 = document.querySelector("#floor1");
let btn2 = document.querySelector("#floor2");
let btn3 = document.querySelector("#floor3");
let btn4 = document.querySelector("#floor4");
let btn5 = document.querySelector("#floor5");
let btn6 = document.querySelector("#floor6");
let btn7 = document.querySelector("#floor7");
let btn8 = document.querySelector("#floor8");
let btn9 = document.querySelector("#floor9");
let btn10 = document.querySelector("#floor10");
let btn11 = document.querySelector("#floor11");
let btn12 = document.querySelector("#floor12");
let btn13 = document.querySelector("#floor13");
let btn14 = document.querySelector("#floor14");
let btn15 = document.querySelector("#floor15");
let btn16 = document.querySelector("#floor16");
let audio = document.querySelector("audio");
console.log(audio);

let up = document.querySelector("#Up");
let down = document.querySelector("#Down");
let floor = document.querySelector("#floor");
elev.style.transition = "1.5s";
let maxFloor = 675;
let minFloor = 0;

up.addEventListener("click", upOneFloor);
down.addEventListener("click", downOneFloor);

function upOneFloor() {
  if (current < maxFloor) {
    elev.style.marginBottom = `${(current = current + 45)}px`;
  }
  switch (current) {
    case 45:
      floor.innerText = "2 Этаж";
      audio.play();
      break;
    case 90:
      floor.innerText = "3 Этаж";
      audio.play();
      break;
    case 135:
      floor.innerText = "4 Этаж";
      audio.play();
      break;
    case 180:
      floor.innerText = "5 Этаж";
      audio.play();
      break;
    case 225:
      floor.innerText = "6 Этаж";
      audio.play();
      break;
    case 270:
      floor.innerText = "7 Этаж";
      audio.play();
      break;
    case 315:
      floor.innerText = "8 Этаж";
      audio.play();
      break;
    case 360:
      floor.innerText = "9 Этаж";
      audio.play();
      break;
    case 405:
      floor.innerText = "10 Этаж";
      audio.play();
      break;
    case 450:
      floor.innerText = "11 Этаж";
      audio.play();
      break;
    case 495:
      floor.innerText = "12 Этаж";
      audio.play();
      break;
    case 540:
      floor.innerText = "13 Этаж";
      audio.play();
      break;
    case 585:
      floor.innerText = "14 Этаж";
      audio.play();
      break;
    case 630:
      floor.innerText = "15 Этаж";
      audio.play();
      break;
    case 675:
      floor.innerText = "16 Этаж";
      audio.play();
      break;
  }
}

function downOneFloor() {
  if (current > minFloor) {
    elev.style.marginBottom = `${(current = current - 45)}px`;
  }
  switch (current) {
    case 0:
      floor.innerText = "1 Этаж";
      audio.play();
      break;
    case 45:
      floor.innerText = "2 Этаж";
      audio.play();
      break;
    case 90:
      floor.innerText = "3 Этаж";
      audio.play();
      break;
    case 135:
      floor.innerText = "4 Этаж";
      audio.play();
      break;
    case 180:
      floor.innerText = "5 Этаж";
      audio.play();
      break;
    case 225:
      floor.innerText = "6 Этаж";
      audio.play();
      break;
    case 270:
      floor.innerText = "7 Этаж";
      audio.play();
      break;
    case 315:
      floor.innerText = "8 Этаж";
      audio.play();
      break;
    case 360:
      floor.innerText = "9 Этаж";
      audio.play();
      break;
    case 405:
      floor.innerText = "10 Этаж";
      audio.play();
      break;
    case 450:
      floor.innerText = "11 Этаж";
      audio.play();
      break;
    case 495:
      floor.innerText = "12 Этаж";
      audio.play();
      break;
    case 540:
      floor.innerText = "13 Этаж";
      audio.play();
      break;
    case 585:
      floor.innerText = "14 Этаж";
      audio.play();
      break;
    case 630:
      floor.innerText = "15 Этаж";
      audio.play();
      break;
    case 675:
      floor.innerText = "16 Этаж";
      audio.play();
      break;
  }
}

btn1.addEventListener("click", function () {
  while (current > 0) {
    downOneFloor();
  }
});
btn2.addEventListener("click", function () {
  while (current < 45) {
    upOneFloor();
  }
  while (current > 45) {
    downOneFloor();
  }
});
btn3.addEventListener("click", function () {
  while (current < 90) {
    upOneFloor();
  }
  while (current > 90) {
    downOneFloor();
  }
});
btn4.addEventListener("click", function () {
  while (current < 135) {
    upOneFloor();
  }
  while (current > 135) {
    downOneFloor();
  }
});
btn5.addEventListener("click", function () {
  while (current < 180) {
    upOneFloor();
  }
  while (current > 180) {
    downOneFloor();
  }
});
btn6.addEventListener("click", function () {
  while (current < 225) {
    upOneFloor();
  }
  while (current > 225) {
    downOneFloor();
  }
});
btn7.addEventListener("click", function () {
  while (current < 270) {
    upOneFloor();
  }
  while (current > 270) {
    downOneFloor();
  }
});
btn8.addEventListener("click", function () {
  while (current < 315) {
    upOneFloor();
  }
  while (current > 315) {
    downOneFloor();
  }
});
btn9.addEventListener("click", function () {
  while (current < 360) {
    upOneFloor();
  }
  while (current > 360) {
    downOneFloor();
  }
});
btn10.addEventListener("click", function () {
  while (current < 405) {
    upOneFloor();
  }
  while (current > 405) {
    downOneFloor();
  }
});
btn11.addEventListener("click", function () {
  while (current < 450) {
    upOneFloor();
  }
  while (current > 450) {
    downOneFloor();
  }
});
btn12.addEventListener("click", function () {
  while (current < 495) {
    upOneFloor();
  }
  while (current > 495) {
    downOneFloor();
  }
});
btn13.addEventListener("click", function () {
  while (current < 540) {
    upOneFloor();
  }
  while (current > 540) {
    downOneFloor();
  }
});
btn14.addEventListener("click", function () {
  while (current < 585) {
    upOneFloor();
  }
  while (current > 585) {
    downOneFloor();
  }
});
btn15.addEventListener("click", function () {
  while (current < 630) {
    upOneFloor();
  }
  while (current > 630) {
    downOneFloor();
  }
});
btn16.addEventListener("click", function () {
  while (current < 675) {
    upOneFloor();
  }
  while (current > 675) {
    downOneFloor();
  }
});
