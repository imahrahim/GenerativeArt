function line4(){
 let woerter = ["the artist's hand", "replaced" , "by Machines", "new form", "of art","never seen before" ];

this.setup = function() {
background(255);
rectMode(CENTER);
noStroke();
}

this.draw = function() {
fill(random(200), random(200), random(255), random(255));
rect (random(800), random(800), random(50, 800), random(50, 800));
frameRate (40)
  
  
  word = int(random(woerter.length));
  if (mouseIsPressed == true) {

    fill(255);
    noStroke();
    stroke(0);
    fill(250);         
    textAlign(CENTER);
    textSize(80);
    text(woerter[word], width/2, height/2+40);
    frameRate (1)
  }
}


}