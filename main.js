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

// ctx.fillstyle - "white";
// let yVal = 200;
// let xVal = 40;
// for (let i = 0; 1 < 4; i++) {
//   for (let j = 0; j < 6; j++) {
//     ctx.fillRect(xVal, yVal, 15, 10);
//     yVal += 25;
//   }
//   xVal += 22;
//   yVal = 200;
// }
// xVal = 20;
// yVal = 370;
// for (let i = 0; 1 < 6; i++) {
//   ctx.fillRect(xVal, yVal, 110, 25);
//   yVal += 45;
// }
// xVal = 170;
// yVal = 120;
// for (let i = 0; 1 < 5; i++) {
//   ctx.fillRect(xVal, yVal, 10, 500);
//   xVal += 25;
// }

// // Long Rect
// ctx.fillStyle = "white";
// ctx.fillRect(170, 125, 11, 510);
// ctx.fillRect(195, 125, 11, 510);
// ctx.fillRect(220, 125, 11, 510);
// ctx.fillRect(245, 125, 11, 510);
// ctx.fillRect(267, 125, 11, 510);

// // smalll boxess

// //row 1
// ctx.fillStyle = "white";
// ctx.fillRect(40, 200, 11, 10);
// ctx.fillRect(40, 225, 11, 10);
// ctx.fillRect(40, 250, 11, 10);
// ctx.fillRect(40, 275, 11, 10);
// ctx.fillRect(40, 300, 11, 10);
// ctx.fillRect(40, 325, 11, 10);
// //row 1

// //row 2
// ctx.fillRect(60, 200, 11, 10);
// ctx.fillRect(60, 225, 11, 10);
// ctx.fillRect(60, 250, 11, 10);
// ctx.fillRect(60, 275, 11, 10);
// ctx.fillRect(60, 300, 11, 10);
// ctx.fillRect(60, 325, 11, 10);
// //row 2

// //row 3
// ctx.fillRect(80, 200, 11, 10);
// ctx.fillRect(80, 225, 11, 10);
// ctx.fillRect(80, 250, 11, 10);
// ctx.fillRect(80, 275, 11, 10);
// ctx.fillRect(80, 300, 11, 10);
// ctx.fillRect(80, 325, 11, 10);
// //row 3

// //row 4
// ctx.fillRect(100, 200, 11, 10);
// ctx.fillRect(100, 225, 11, 10);
// ctx.fillRect(100, 250, 11, 10);
// ctx.fillRect(100, 275, 11, 10);
// ctx.fillRect(100, 300, 11, 10);
// ctx.fillRect(100, 325, 11, 10);
// //row 4
