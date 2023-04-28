let mgr;
let context;

function setup() {
  createCanvas(windowWidth,windowWidth);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(line0);

}

function draw() {
  mgr.draw();
}

function mouseClicked() {
  if (!context) {
    context = new AudioContext();
  }
}
