let mgr;

function setup() {
  createCanvas(windowWidth,windowWidth);
  mgr = new SceneManager();
  mgr.wire();
  mgr.showScene(line0);
  
  let button = createButton('Start Audio');
  button.mousePressed(startAudio);
}

function draw() {
  mgr.draw();
}

function startAudio() {
  // Create the AudioContext after a user gesture
  context = new AudioContext();
}
