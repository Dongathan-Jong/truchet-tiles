const w = 640;
const h = w;
const num = 10;

function setup() {
  createCanvas(w, h);
  imageMode(CENTER);

  const cell = getPattern(floor(w / num));

  background(224);
  for (let x = 0; x < num; x++) {
    for (let y = 0; y < num; y++) {
      push();
      translate((x + 0.5) * w / num, (y + 0.5) * height / num);
      if (random(1.0) < 0.5) {
        rotate(HALF_PI);
      }
      image(cell, 0, 0);
      pop();
    }
  }
}

function getPattern(_size) {
  g = createGraphics(_size, _size);
  g.background(224);
  g.noFill();
  g.stroke(96);
  g.strokeWeight(_size * 0.1);
  g.circle(0, 0, _size);
  g.circle(_size, _size, _size);
  return g;
}
