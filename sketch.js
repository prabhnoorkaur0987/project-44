var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2=loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
fill(255)
textSize(40)
text("score :"+score,400,50)
if(score===3){
  clear()
  background(bg2)
  fill('black')
  textsize(40)
  text("TREASURE UNLOCKDED",250,200)
}
  // Add code to display the end screen


  drawSprites()
}