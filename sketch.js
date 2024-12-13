let FeathersXposition = [];
let FeathersYposition = [];
let xSpeed = [];
let ySpeed = [];
let NumberRays = 500;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container");

  for (let i = 0; i < NumberRays; i++) {
    xSpeed.push(random(1, 10));
    ySpeed.push(random(1, 5));

    FeathersXposition.push(random(windowWidth));
    FeathersYposition.push(random(windowHeight));
  }
}

function draw() {
  background(0, 0, 0, 10);
  noStroke();

  for (let i = 0; i < NumberRays; i++) {
    fill(random(100, 255), random(100, 150), random(150));
    ellipse(
      FeathersXposition[i] - random(10), 
      FeathersYposition[i] - random(10), 
      random(5), 
      random(2)*random(5)
    );

    adjustFeatherMovement(i);

    FeathersXposition[i] += xSpeed[i];
    FeathersYposition[i] += ySpeed[i];

    if (FeathersXposition[i] > windowWidth || FeathersXposition[i] < 10) {
      xSpeed[i] *= -1;
    }
    if (FeathersYposition[i] > windowHeight || FeathersYposition[i] < 10) {
      ySpeed[i] *= -1;
    }
  }
}


function adjustFeatherMovement(index) {
  let distancex = FeathersXposition[index] - mouseX;
  let distancey = FeathersYposition[index] - mouseY;
  let distance = dist(FeathersXposition[index], FeathersYposition[index], mouseX, mouseY);

  if (distance < 200) {
    let mappedSpeed = map(distance, 0, 500, 10, 5);
    distancex = distancex / distance;
    distancey = distancey / distance;

    xSpeed[index] = distancex * mappedSpeed;
    ySpeed[index] = distancey * mappedSpeed;
  }
}
