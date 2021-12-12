function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);

  //   console.log(width);

  this.update = function () {
    this.z = this.z - 10;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  };

  this.show = function () {
    fill(255);
    noStroke();
    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);
    // console.log("SX: ", sx, " SY: ", sy);

    ellipse(sx, sy, 8, 8);
  };
}
