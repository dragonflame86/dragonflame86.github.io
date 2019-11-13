let grid =[];
let gridY = [];
let sliderX;
let sliderY;
let cellX, cellY = [];

function setup() {
  createCanvas(400, 400);
  grid.length = 10;
  gridY.length = 10;
  sliderX = createSlider(2, 25, 2);
  sliderY = createSlider(2, 25, 2);
}

function draw() {
  background(0);
  grid.length = sliderX.value();
  gridY.length = sliderY.value();
  for(var i = 0; i < grid.length;i++) {
    stroke(color(255,255,255))
    for(var h = 0; h < height; h++) {
      point(width/(grid.length/i),h)
    }
  }
  for(var e = 0; e < gridY.length; e++) {
    stroke(color(255,255,255));
    for(var w = 0; w < width; w++) {
      point(w,height/(gridY.length/e))
    }
  }
  if(true) {}
}
