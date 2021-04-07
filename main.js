canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
imagearry=["m2.jpg","m3.jpg","m4.jpg","m5.png"];
randomimage=Math.floor(Math.random()*4);
console.log(randomimage);

backgroundimage = imagearry[randomimage];
console.log("background image is"+backgroundimage);
roverimage = "rover.png";

roverwidth = 100;
roverheight = 90;

roverx = 10;
rovery = 10;

function add(){
    backgroundimgtag = new Image();
    backgroundimgtag.onload = uploadmarsfunction;
    backgroundimgtag.src = backgroundimage;

    roverimgtag = new Image();
    roverimgtag.onload = uploadroverfunction;
    roverimgtag.src = roverimage;
}

function uploadmarsfunction() {
    ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height);
}

function uploadroverfunction() {
    ctx.drawImage(roverimgtag,roverx,rovery,roverwidth, roverheight);
}

window.addEventListener("keydown", keydownfunction);

function keydownfunction(e)
{
    keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38'){

up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
}

function up(){
if(rovery>=0){
rovery = rovery - 10;
console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
uploadmarsfunction();
uploadroverfunction()
}
}

function down(){
if(rovery<=500){
rovery = rovery + 10;
console.log("When down arrow is pressed , x position of rover" + roverx + " | Y position of rover " + rovery);
uploadmarsfunction();
uploadroverfunction()
}
}

function left(){
if(roverx>=0){
roverx = roverx - 10;
console.log("When left arrow is pressed , x position of rover" + roverx + " | Y position of rover" + rovery);
uploadmarsfunction();
uploadroverfunction()
}
}

function right(){
if(roverx<=700){
roverx = roverx + 10;
console.log("When right arrow is pressed , x position of rover" + roverx + " | Y position of rover" + rovery);
uploadmarsfunction();
uploadroverfunction()
}
}

