function setup() {
  createCanvas(408, 408);
}

function draw() {
  background(0);
  translate(width / 2, height);
  stroke(255);
  let n = 1;
  fill(255)
  for (let y = 0; y < width; y += 12) {
    for (let i = 0; i < TAU; i += TAU / 32) {
      const Y = y + frameCount % 12;
      strokeWeight((width - Y) / 32 / n);
      n = 1 == n ? 2 : 1;
      rotate(sin(Y / 64 - frameCount / 16 + i) / (width / 2));
      point(sin(i) * Y, cos(i) * Y);
    }
  }
  circle(0, 0, 16)
  // noLoop()
  // if (frameCount > width / 4) noLoop()
}

function keyPressed() {
  if (key === 's') {
    saveGif('loop', width / 4, { delay: 0, units: 'frames' })
  }
}
