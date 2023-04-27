function line0(){
  let canvas;
  let mic;
  let vol;
   
  let textLines = [
    "In lines of code and digital art,",
    "Generative beauty is set apart.",
    "Pixels dance and colors blend,",
    "A canvas that never ends.",
    "A world of patterns and endless creation,",
    "Where imagination meets computation.",
    "The artist's hand replaced by machine,",
    "A new form of art, never before seen.",
    "Generative arts, a sight to behold, ",
    "A marriage of technology and soul.",
    "Let the algorithms bring art to life,",
    "A canvas that's forever rife."
  ];
   
   
  this.setup = function() {
    mic = new p5.AudioIn();
    mic.start();
  }
   
  this.draw = function() {
    drawGradientBackground();
   
    vol = mic.getLevel();
   
    // Draw reactive polygons in the background
    drawReactivePolygons(vol);
   
    // Draw reactive circles
    drawReactiveCircles(vol);
   
    // Draw readable reactive text
    drawReactiveText(vol);
  }
   
  this.drawGradientBackground = function() {
    let topColor = color(230, 230, 255);
    let bottomColor = color(255, 230, 230);
    for (let y = 0; y < height; y++) {
      let inter = map(y, 0, height, 0, 1);
      let c = lerpColor(topColor, bottomColor, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }
   
  this.drawReactivePolygons = function(vol) {
    for (let i = 1; i <= 6; i++) {
      push();
      translate(width / 2, height / 2);
      let polygonSize = map(vol, 0, 1, 200 / i, 800 / i);
      let numSides = 6;
      let polygonColor = color(0, 100, 240, 30 / i);
      fill(polygonColor);
      noStroke();
      beginShape();
      for (let j = 0; j < numSides; j++) {
        let angle = map(j, 0, numSides, 0, TWO_PI);
        let x = polygonSize * cos(angle);
        let y = polygonSize * sin(angle);
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
    }
  }
   
  this.drawReactiveCircles = function(vol) {
    let numCircles = 10;
    for (let i = 1; i <= numCircles; i++) {
      push();
      let circleSize = map(vol, 0, 3, 150 / i, 600 / i); // Increase the minimum size to 100 / i
      let circleColor = color(0, 200, 240, 90 / i);
      fill(circleColor);
      noStroke();
      ellipse(width / 5, height / 4, circleSize, circleSize);
      pop();
    }
  }
   
  this.drawReactiveText = function(vol) {
    textAlign(CENTER, CENTER);
    let fontSize = map(vol, 0, 1, 20, 60);
    textSize(fontSize);
    let lineHeight = fontSize *2;
    textFont("georga");
   
    for (let i = 0; i < textLines.length; i++)
  {
      let r = map(sin(frameCount * 0.005 + i * 0.5), -1, 1, 0, 255);
      let g = map(sin(frameCount * 0.005 + i * 0.5 + PI / 3), -1, 1, 0, 255);
      let b = map(sin(frameCount * 0.005 + i * 0.5 + (2 * PI) / 3), -1, 1, 0, 255);
   
      let y = height / 2 - (textLines.length / 2 - i) * lineHeight;
      fill(r, g, b, map(vol, 0, 1, 100, 255));
      stroke(0);
      strokeWeight(3);
   
      if (i === floor(map(vol, 0, 1, 0, textLines.length))) {
        fill(r, g, b, 255);
      }
   
      text(textLines[i], width / 2, y);
    }
  }
  let fadingEllipses = [];
   
  this.draw = function() {
    this.drawGradientBackground();
   
    vol = mic.getLevel();
   
    // Draw reactive polygons in the background
    this.drawReactivePolygons(vol);
   
    // Draw reactive circles
    this.drawReactiveCircles(vol);
   
    // Draw readable reactive text
    this.drawReactiveText(vol);
   
    // Draw reactive fading ellipse
    this.drawReactiveFadingEllipse(vol);
   
    
  }
   
 this.drawReactiveFadingEllipse = function(vol) {
    if (random() < 0.1) {
      let x = random(width);
      let y = random(height);
      let size = map(vol, 0, 1, 50, 200);
      let alpha = 255;
      fadingEllipses.push({ x, y, size, alpha });
    }
   
    for (let i = fadingEllipses.length - 1; i >= 0; i--) {
      let ellipseData = fadingEllipses[i];
      fill(200, 200, 255, ellipseData.alpha);
      noStroke();
      ellipse(ellipseData.x, ellipseData.y, ellipseData.size, ellipseData.size);
   
      ellipseData.alpha -= 2;
      if (ellipseData.alpha <= 0) {
        fadingEllipses.splice(i, 1);
      }
    }
  }
  let particles = [];
   
 this.createParticles =  function(vol) {
    let numParticles = Math.floor(vol * 100);
    for (let i = 0; i < numParticles; i++) {
      let p = {
        x: width / 2,
        y: height / 2,
        size: random(1, 5),
        hue: random(100, 360),
        xSpeed: random(-5, 5),
        ySpeed: random(-5, 5),
        alpha: 255
      };
      particles.push(p);
    }
  }
  this.drawParticles = function() {
    for (let i = particles.length - 1; i >= 0; i--) {
      let p = particles[i];
   
      noStroke();
      fill(p.hue, 200, 100, p.alpha);
      ellipse(p.x, p.y, p.size);
   
      p.x += p.xSpeed;
      p.y += p.ySpeed;
      p.alpha -= 3;
   
      if (p.alpha <= 0) {
        particles.splice(i, 1);
      }
    }
  }
  

}
