function line3(){
  let myText = "A world of patterns and endless creation, Where imagination meets computation.";
  let words = myText.split(" ");
  let wordIndex = 0;
  let colors = ['#0018FF', '#FF0057', '#FFC0CB', '#ECFF5A', '#25FF11', '#FF6347'];
  
  this.setup = function() {
    textSize(60);
    textAlign(CENTER, CENTER);
  }
  
this.draw = function() {
    background('#000000');
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let wordWidth = textWidth(word + " ");
      let x = map(sin(frameCount / 30 + i), -1, 1, width / 4, 3 * width / 4);
      let y = map(cos(frameCount / 30 + i), -1, 1, height / 4, 3 * height / 4);
      fill(random(colors));
      text(word, x, y);
      for (let j = 0; j < word.length; j++) {
        let letter = word.charAt(j);
        let letterWidth = textWidth(letter);
        let letterX = x - wordWidth / 2 + letterWidth / 2 + textWidth(word.substring(0, j));
        let letterY = y;
        fill(random(colors));
        ellipse(letterX, letterY, 10, 10);
      }
    }
  }
  
  

}