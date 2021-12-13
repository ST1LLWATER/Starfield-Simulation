let stars = [];
let amount = 800;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < amount; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  // let speed = map(mouseX, 0, width, 0, 80);
  translate(width / 2, height / 2);
  for (let i = 0; i < amount; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
