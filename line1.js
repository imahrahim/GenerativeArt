function line1(){
const message = 'In lines of code and digital art, Generative beauty is set apart. ';
const messageX = windowWidth/2;
const messageY = 100;

// p5.glitch-webcam
// cc teddavis.org 2020

let glitch, capture, w = 320, h = 240;

this.setup = function() {
	capture = createCapture(VIDEO);
	capture.size(w, h);
	capture.hide();


	background(0);
	imageMode(CENTER);

	glitch = new Glitch();
	glitch.pixelate(1);
}

this.draw= function() {
	if(frameCount % 3 === 0) {
		
		if(!mouseIsPressed){
			glitch.loadImage(capture);
		}
		
		// map mouseX to # of randomBytes() + mouseY to limitBytes()
		glitch.limitBytes(map(mouseY, 0, height, 0, 1));
		glitch.randomBytes(map(mouseX, 0, width, 0, 100));
		glitch.buildImage();
	}
	
	image(glitch.image, width / 2, height / 2, glitch.width, glitch.height)
  
 
    textSize(20);

  if (isMouseInsideText(message, messageX, messageY)) {
    cursor(HAND);
    fill(350, 22, 100);
    noStroke()
  } else {
    cursor(ARROW);
    fill(255);
    noStroke();
  }

  text(message, messageX, messageY);
}

this.mouseClicked = function() {
  if (isMouseInsideText(message, messageX, messageY)) {
  if (random(1) < 0.5) { window.open('https://www.boredpanda.com/the-most-beautiful-men-and-women-in-the-world-according-to-ai-nordchem/?utm_source=google&utm_medium=organic&utm_campaign=organic');}

else { 
    
window.open('https://www.technologyreview.com/2023/03/13/1069649/hyper-realistic-beauty-filters-bold-glamour/'); }
  }
}

if (isMouseInsideText(message, messageX, messageY)) {
  const messageWidth = textWidth(message);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return mouseX > messageX && mouseX < messageX + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;
}

}
function isMouseInsideText(text, x, y) {
  const messageWidth = textWidth(text);
  const messageTop = y - textAscent();
  const messageBottom = y + textDescent();

  return mouseX > x && mouseX < x + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;
}
