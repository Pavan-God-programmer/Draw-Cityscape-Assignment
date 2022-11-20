// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

//
//
//
//
//
//
//

// long rect

let num = +180;
ctx.fillStyle = "white";
ctx.fillRect(+num, 115, 11, 525);

for (let n = +180; n <= 260; n += 20) {
  ctx.fillRect(+n, 115, 11, 525);
}

// rect

let num1 = +360;
ctx.fillStyle = "white";
ctx.fillRect(25, +num1, 110, 23);
for (let num1 = +360; num1 <= 610; num1 += 50) {
  ctx.fillRect(25, +num1, 110, 23);
}

// tiny rect

let x = +30;
let y = +230;
ctx.fillRect(+x, 250, 9, 9);
for (let y = +250; y <= 390; y += 30) {
  for (let x = +30; x <= 90; x += 20) {
    ctx.fillRect(+x, 225, 9, 9);
    ctx.fillRect(+x, 197, 9, 9);
    ctx.fillRect(+x, +y, 9, 9);
  }
}
