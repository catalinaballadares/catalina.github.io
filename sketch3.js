let NumberofObj = 100

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("container3");

  angleMode(DEGREES);
  normalMaterial();
}

function draw() {
  background(0,0,0);
  orbitControl();

  for (let i = 0; i < NumberofObj; i++) {
  // Box
  push();
  translate(50, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();


  push();
  translate(-50, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();
    
  
  push();
  translate(-150, -100, 0);
  rotateWithFrameCount();
  box(70, 70, 70);
  pop();
  
  // Extra rotation to start model in upright position
  rotateZ(180);
  pop();
}
}

// Rotate 1 degree per frame along all three axes
function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}