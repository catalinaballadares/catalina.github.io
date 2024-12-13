// Initialize variables
let keys = [];
let charIndex = 0;
let rows = [];
let startTyping = false;
let font;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("container4");
  textFont('Courier New');
  textSize(16);
  frameRate(30);

  // Initialize keyboard keys
  keys = [
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-='
  ];

  // Start with a transparent black background
  background(0, 0);

  // Set a timer to start typing after 3 seconds
  setTimeout(() => {
    startTyping = true;
  }, 1000);
}

function draw() {

  background(0);
  fill(57, 255, 20); 
  noStroke();
  frameRate(100);

  // Calculate how many characters fit in one row and how many rows fit the screen
  const charsPerRow = floor(width / textWidth('W'));
  const maxRows = floor(height / textSize());

  if (rows.length >= maxRows) {
    rows.shift(); // Remove the top row to make space for new rows
  }

  // Add characters to the current row
  if (frameCount % 1 === 0) {
    let Row = rows[rows.length - 1] || '';
    Row += keys[charIndex];
    rows[rows.length - 1] = Row;

    charIndex = (charIndex + 1) % keys.length;

    if (Row.length >= charsPerRow) {
      rows.push(''); // Start a new row when the current one is full
    }
  }

  // Draw all rows
  for (let i = 0; i < rows.length; i++) {
    text(rows[i], 0, (i + 1) * textSize());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}