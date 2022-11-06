let bg; // Background

let menuIconImg; // Menu Icon
let menuIconBtn;

let lightbulbImg; //Light switch
let lightbulbBtn;

let calendarImg; // calendar app
let calendarBtn;
let calendarApp;
let calendarAppImg;

let twitterImg; // Twitter app
let twitterBtn;
let twitterApp;
let twitterAppImg;

let snapchatImg; // Snapchat App
let snapchatBtn;
let snapchatApp;
let snapchatAppImg;

let messengerImg; // SMS app
let messengerBtn;
let messengerApp;
let messengerAppImg;

var i = 0;

//Booleans for switches
let on = false;
let onCal = false;
let onTwi = false;
let onSna = false;
let onMes = false;

// Clock
let y;
let m;
let d;
let h;
let min;
let s;

function preload() {
  menuIconImg = loadImage("Assets/hamburgerIcon.png");
  lightbulbImg = loadImage("Assets/lightbulbIcon.png");  
  calendarImg = loadImage("Assets/calendarIcon.png");
  twitterImg = loadImage("Assets/twitterIcon.png");
  snapchatImg = loadImage("Assets/snapchatIcon.png");
  messengerImg = loadImage("Assets/messengerIcon.png");
  calendarAppImg = loadImage("Assets/calendarAppImg.png");
  twitterAppImg = loadImage("Assets/twitterAppImg.png");
  snapchatAppImg = loadImage("Assets/snapchatAppImg.png");
  messengerAppImg = loadImage("Assets/messengerAppImg.png");


}
function setup() {
  bg = loadImage('Assets/mirror.jpg');
  var canvas = createCanvas(1622,1145);
  canvas.parent('sketch-holder')
  menuIconBtn = new Button(10,10, menuIconImg);
}

function draw() {
  y = year();
  m = month()
  d = day();
  h = hour();
  min = minute();
  s = second();
  background(bg);
  menuIconBtn.display(); 
  hideWeather(); 
  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
  if(on){
    lightbulbBtn = new Button(10,124, lightbulbImg);
    calendarBtn = new Button(10,239, calendarImg);
    twitterBtn = new Button(10,354, twitterImg);
    snapchatBtn = new Button(10,469, snapchatImg);
    messengerBtn = new Button(10,584, messengerImg);
    lightbulbBtn.display();
    calendarBtn.display();
    twitterBtn.display();
    snapchatBtn.display();
    messengerBtn.display();
    textSize(90);
    fill(0);
    stroke(255);
    text('WEIGHT: 170lbs', 500, 815);
    textSize(50);
    text(m + '/' + d + '/' + y + ', ' + h + ':' +  min + ':' + s, 1161, 155);
  }
  if(onCal){
    calendarApp = new Button(400,115,calendarAppImg);
    calendarApp.displayApp();
  }
  if(onTwi){
    twitterApp = new Button(600,115,twitterAppImg);
    twitterApp.displayApp();
  }
  if(onSna){
    snapchatApp = new Button(600,115,snapchatAppImg);
    snapchatApp.displayApp();
  }
  if(onMes){
    messengerApp = new Button(600,115,messengerAppImg);
    messengerApp.displayApp();
  }
}

class Button {
  
  constructor(inX, inY, inImg) {
    this.x = inX;
    this.y = inY;
    this.img = inImg;
  }
  
  display() {
    stroke(0);
    
    // tint the image on mouse hover
    if (this.over()) {
      tint(222, 222, 222);
    } else {
      noTint();
    }
    
    image(this.img, this.x, this.y);
  }
  displayApp(){
    image(this.img, this.x, this.y);
  }
  
  // over automatically matches the width & height of the image read from the file
  // see this.img.width and this.img.height below
  over() {
    if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
      return true;
    } else {
      return false;
    }
  }
}
function mousePressed() {
  if (menuIconBtn.over()){
    onCal = false;
    onTwi = false;
    onSna = false;
    onMes = false;
    on = !on;
  }
  if(calendarBtn.over()){
    onTwi = false;
    onSna = false;
    onMes = false;
    onCal = !onCal;
    // print("calendar", onCal);
  }
  if(twitterBtn.over()){
    onCal = false;
    onSna = false;
    onMes = false;
    onTwi = !onTwi;
  }
  if(snapchatBtn.over()){
    onCal = false;
    onTwi = false;
    onMes = false;
    onSna = !onSna;
  }
  if(messengerBtn.over()){
    onCal = false;
    onTwi = false;
    onSna = false;
    onMes = !onMes;
  }
  if (lightbulbBtn.over()){
    i+=1;
    switch(i) {
      case 1:
        bg = loadImage('Assets/mirror-red.jpg');
        break;
      case 2:
        bg = loadImage('Assets/mirror-orange.jpg');
        break;
      case 3:
        bg = loadImage('Assets/mirror-yellow.jpg');
        break;
      case 4:
        bg = loadImage('Assets/mirror-green.jpg');
        break;
      case 5:
        bg = loadImage('Assets/mirror-blue-green.jpg');
        break;
      case 6:
        bg = loadImage('Assets/mirror-blue.jpg');
        break;
      case 7:
        bg = loadImage('Assets/mirror-pink.jpg');
        break;
      case 8:
        bg = loadImage('Assets/mirror-purple.jpg');
        break;
      default:
        i = 0
        bg = loadImage('Assets/mirror.jpg');
        break;    
    }
  }
}
// Closes an opened app if another app is opened

function hideWeather()  { 
  if (on){
    document.getElementById("ww").style.visibility="visible";
    document.getElementById("nf").style.visibility="visible";
  }else{
    document.getElementById("ww").style.visibility="hidden";
    document.getElementById("nf").style.visibility="hidden";
  }  
}