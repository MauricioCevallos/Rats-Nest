let img;
let audio = new Audio('moon.mp3'); 

function preload() {
    
    img = loadImage('https://www.the3rdsequence.com/texturedb/wallpaper/31/2048/1080/holey-cheese.jpg');
}

// draw a sphere with radius 40
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}


function draw() {
  background('black');
  noStroke();
  rotateX(frameCount * 0.001);
  rotateY(frameCount * 0.001);
  translate(0,200,0);
  texture(img);
  sphere(1000);
  
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