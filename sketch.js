let stars = [];
let amount = 1000;
let speed;
let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < amount; i++) {
    stars[i] = new Star();
  }
  // mic = new p5.AudioIn();
  // mic.start();
  // console.log(mic);
}

function draw() {
  background(0);
  // console.log(frameCount);
  // let vol = mic.getLevel();
  // let speed = map(vol, 0, 1, 10, 50);
  let speed = map(mouseX, 0, width, 10, 50);
  // console.log(speed);
  let orientationX = map(mouseX, 0, width, 1, 3);
  let orientationY = map(mouseY, 0, width, 1, 3);

  translate(width / orientationX, height / orientationY);
  for (let i = 0; i < amount; i++) {
    stars[i].update(speed);
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
