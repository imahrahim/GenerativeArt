function line5(){
  this.setup = function() {
    angleMode(DEGREES);
    background(0);
    noFill();
  }
  
  this.generateLines = function() {
    for (let i = 0; i < 50; i++) {
      let x1 = random(width);
      let y1 = random(height);
      let x2 = random(width);
      let y2 = random(height);
      let r = random(255);
      let g = random(255);
      let b = random(255);
      let a = random(50, 200);
      stroke(r, g, b, a);
      line(x1, y1, x2, y2);
    }
  }
  
 this.mouseMoved = function() {
    let hue = map(mouseX, 0, width, 0, 360);
    let saturation = map(mouseY, 0, height, 0, 100);
    strokeWeight(2);
    stroke(hue, saturation, 100, 100);
  }

this.draw = function() {
    if (frameCount % 2 == 0) {
      this.generateLines();
    }
  }
  

}