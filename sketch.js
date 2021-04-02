var cols, rows;
var w = 40;
var grid = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }
}

function Cell(i, j) {
  this.i = i; //column #
  this.j = j; // row #

  this.show = function () {
    var x = this.i * w;
    var y = this.j * w;
    stroke(255);
    line(x, y, x + w, y);
    line(x + w, y, x + w, y + w);
    line(x + w, y + w, x, y + w);
    line(x, y + w, x, y);
    // noFill();
    // rect(x, y, w, w);
  };
}
