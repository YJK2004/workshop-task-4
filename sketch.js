let slider;
let img;

let selectText = '';
let selection;

let apps = [];
let icon1, icon2, icon3;

function preload(){
  img = loadImage("images/school_bg.jpg");

  icon1 = loadImage("images/facebook.png");
  icon2 = loadImage("images/insta.png");
  icon3 = loadImage("images/x.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  slider = createSlider(0, 255, 0);
  slider.position(570, 700);
  slider.size(300);
  
  imageMode(CENTER);

  selection = createSelect();
  selection.position(200, height/2);
  selection.option('12:01');
  selection.option('11:21');
  selection.option('03:33');
  selection.changed(changeText);

  apps.push(icon1);
  apps.push(icon2);
  apps.push(icon3);

  icon1.resize(100, 100);
  icon2.resize(100, 100);
  icon3.resize(100, 100);

  checkbox = createCheckbox();
  checkbox.position(1220, height/2)


}


function draw() {


  img.resize(600, 900);

  let val = slider.value();
  tint(val, 255);
  image(img, width/2, height/2);


  if (checkbox.checked()) {
    let r = random(apps);
    image(r, 550, 300);

  }

 
  textAlign(CENTER, TOP);
  textSize(150);
  stroke(0);
  strokeWeight(5);
  fill(0, 255, 0);
  text(selectText, width/2, 100);

  textSize(30);
  noStroke();
  fill(200);
  textAlign(CENTER);
  text('1. swipe to open', width/2, 650);


  textSize(20);
  text('2. time selection', 220, 350)
  text('3. random apps', 1250, 350)


}


function changeText() {
  selectText = selection.value();
}