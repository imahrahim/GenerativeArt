let mgr;

function setup() {
  createCanvas(windowWidth,windowWidth);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(line0);
}

function draw() {
  mgr.draw();
}