function line2(){
  let pixels = [];
let n = 1000;

let x = 0;
let y = 0;

this.setup = function() {
  for (let i = 0; i < n; i++) {
    
    let w = random(400,800)
    let h = random(400,800)
    let x = random(0,width);
    let y = random(0,height);

    let noiseValueX = noise(x*0.5, y*0.5)
    x = map(noiseValueX,0,1,0,800)
    let noiseValueY = noise(x*0.5, y*0.5)
    y = map(noiseValueY,0,1,200,600)

    let c = map(noiseValueX,0,1,0,255)

    let pix = new Pixel(x,y,c);
    pixels.push(pix);
  }

  angleMode(DEGREES);
}

this.draw = function() {
  background(255);

  let noiseValue =  noise(mouseX*0.01)
  let s = map(noiseValue,0,1,0,20);
  textSize(s);
  textAlign(CENTER)
  text('Pixels dance and colors blend, A canvas that never ends',width/2,height/2)

  rectMode(CENTER)
  fill(0,255,200,30);
  rect(width/2,height/2,400,400)

  for (let i = 0; i < n; i++) {
    pixels[i].update();
    pixels[i].display();
  }

}

class Pixel{
  constructor(x,y,c){
    this.pos = createVector(x, y);
    this.vel = createVector(0.5, -0.5);
    this.r = 0;
    this.c = c
    this.canvas = 500;
    this.lifespan = 255;
  }
  update(){
    let noiseValue =  noise(this.pos.x*0.01, this.pos.y*0.01)
    let theta = map(noiseValue,0,1,0,360);
    this.vel.setHeading(theta)
    this.pos.add(this.vel)
    
    this.lifespan = this.lifespan -1

    if (this.pos.x < this.lifespan){
      this.pos.x = width
    } 
     if (this.pos.y > height){
      this.pos.y = 0;
  }
}

  display(){
    fill(0,this.c,200)
    noStroke();
    
    rect(this.pos.x+this.c, this.pos.y, 10,10);
  }
  }



}