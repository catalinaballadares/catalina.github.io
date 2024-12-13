let FeathersXposition = [];
let FeathersYposition = [];
let xSpeed = [];
let ySpeed = [];
let NumberRays = 200;

function setup() {
  let canvas2 = createCanvas(windowWidth, windowHeight);
  canvas2.parent("container2");

  for (let i = 0; i < NumberRays; i++) {
    let xSpeedNow = random(1, 3);
    let ySpeedNow = random(1, 3);
    ySpeed.push(ySpeedNow);
    xSpeed.push(xSpeedNow);

    let posX = i * (windowWidth / NumberRays) + 10;
    let posY = i * (windowHeight / NumberRays) + 10;

    FeathersXposition.push(posX);
    FeathersYposition.push(posY);
  }
}

function draw() {
  background(0, 0, 0, 20);
  noStroke();
  for (let i = 0; i < NumberRays; i++) {
    fill(random(100, 255), random(100, 150), random(150), 10);
    bezier(
      FeathersXposition[i],
      FeathersYposition[i],
      FeathersXposition[i]/50,
      50,
      FeathersXposition[i] / 200,
      FeathersYposition[i] / 200,
      FeathersXposition[i] / 100,
      FeathersYposition[i] / 100
    );

           if (FeathersXposition[i] > windowWidth/10){
    
    FeathersXposition[i] += xSpeed[i];
    FeathersYposition[i] += ySpeed[i];

    if (FeathersXposition[i] > windowWidth - 25 || 
        FeathersXposition[i] < 25) {
      xSpeed[i] *= -1;
    }

    if (FeathersYposition[i] > windowWidth - 25 || 
        FeathersYposition[i] < 25) {
      ySpeed[i] *= -1;
      
    }
  }
}
}

function mousePressed() {
  FeathersXposition = [];
  FeathersYposition = [];
  xSpeed = [];
  ySpeed = [];

  for (let i = 0; i < NumberRays; i++) {
    xSpeed.push(random(1, 10));
    ySpeed.push(random(1, 5));

    FeathersXposition.push(random(windowWidth));
    FeathersYposition.push(random(windowHeight));
  }
}

