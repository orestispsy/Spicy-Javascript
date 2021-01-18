var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(canvas.width / 2, (canvas.height * 3) / 4);
ctx.strokeStyle = "black";
ctx.lineWidth = 10;

ctx.lineTo(canvas.width / 2, canvas.height / 4);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 6, 50, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.stroke();
ctx.fillStyle = "lime";
ctx.fill();

ctx.beginPath();
ctx.moveTo(canvas.width /2, canvas.height / 2);
ctx.lineWidth = 10;
ctx.lineTo(canvas.width / 4, canvas.height / 4);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2);
ctx.lineWidth = 10;
ctx.lineTo(canvas.width*3/4, canvas.height/4);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height*3/4);
ctx.lineWidth = 10;
ctx.lineTo((canvas.width * 3) / 4, canvas.height);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(canvas.width / 2, (canvas.height * 3) / 4);
ctx.lineWidth = 10;
ctx.lineTo(canvas.width / 4, canvas.height);
ctx.stroke();
ctx.closePath();







