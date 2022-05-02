//sketch for first page
let img;
let audio = new Audio('holyCheese.mp3'); 

function preload() {
    //img = loadImage("cheese.jpg");
    img = loadImage('https://t3.ftcdn.net/jpg/02/45/86/92/360_F_245869234_UyHEzCOoRDYLdS54XBsB1Hvv4sNfj2q4.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background('black');
  noStroke();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  

  ambientLight(200, 200, 200);
  pointLight(255, 255, 255, 0, -height/2, 100);
  specularMaterial(250);
  translate(-25, 0, 0);
  shininess(1);
  texture(img);
  box(250);
  
  if (mouseIsPressed === true) {
    audioPlay();
}

}


//playing audio
function audioPlay(){    
  audio.play();
  
}

function audioPause(){
  audio.pause();
}