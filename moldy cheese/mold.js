// sketch for rotating block of moldy cheese
let img;

let audio = new Audio('moldy.mp3'); 

function preload() {
    //img = loadImage("cheese.jpg");
    img = loadImage('https://media.istockphoto.com/photos/blue-cheese-picture-id117695864?k=20&m=117695864&s=612x612&w=0&h=Mws5MksKvvQM2moJvtmnIQUjjlQnxUqsWq__vGL07QA=');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background('black');
  noStroke();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  


  noStroke();
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
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