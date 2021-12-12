let stars = [];
let amount = 500;
let speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth, windowHeight);
  for (let i = 0; i < amount; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(0);
  //   console.log(w, h);
  translate(width / 2, height / 2);
  for (let i = 0; i < amount; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
