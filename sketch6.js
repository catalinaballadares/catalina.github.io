let Xpos = [];
let Ypos = [];
let NumberOfRaindrops = 50;
let xSpeed = [];
let ySpeed = [];
let currentColor;
let nextColor;
let transitionStep = 0; 
let rainStartTime = 0; 
let rainDelay = 1000; 
let isFrozen = false; 

function setup() {
  background(0, 0, 0, 10); 
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container5");
  noStroke();

  currentColor = color(0, 0, 255); 
  nextColor = currentColor; 
  resetRain(); 
}

function draw() {
  background(0, 0, 0, 50); 

  for (let i = 0; i < Xpos.length; i++) {
    fill(currentColor.levels[0], currentColor.levels[1], currentColor.levels[2], 80);
    ellipse(Xpos[i], Ypos[i], 2, 30);

    //froze
    if (!isFrozen) {
      Ypos[i] += ySpeed[i];
      Xpos[i] += xSpeed[i];

      // Bounce horizontally
      if (Xpos[i] > width || Xpos[i] < 0) {
        xSpeed[i] *= -1;
      }

      if (Ypos[i] > height) {
        Ypos[i] = random(-50, -10);
        Xpos[i] = random(width);
      }
    }
  }

  if (millis() - rainStartTime > rainDelay) {
    resetRain();
    rainStartTime = millis();
  }
}

function resetRain() {
  let r = lerp(currentColor.levels[0], nextColor.levels[0], 0.1);
  let g = lerp(currentColor.levels[1], nextColor.levels[1], 0.1);
  let b = lerp(currentColor.levels[2], nextColor.levels[2], 0.1);
  currentColor = color(r, g, b);

  transitionStep++;
  if (transitionStep % 2 === 0) {
    nextColor = color(255, 0, 0);
  } else if (transitionStep % 3 === 0) {
    nextColor = color(255, 165, 0);
  } else {
    nextColor = color(0, 0, 255);
  }


  for (let i = 0; i < NumberOfRaindrops; i++) {
    xSpeed.push(random(1, 2));
    ySpeed.push(random(2, 4));
    Xpos.push(random(width));
    Ypos.push(random(-50, -10)); 
  }
}

function mousePressed() {
  Xpos = [];
  Ypos = [];
  xSpeed = [];
  ySpeed = [];
}

function keyPressed() {
  if (key === ' ') {
    isFrozen = !isFrozen;
  }
}
