let clickCount;
let SentakuMode;
let GamenMode;

let pg = [];
let saveCount;

let x = [];
let y = [];
let Size = [];
let interrupt = [];

let randomGauseX1 = [];
let randomGauseY1 = [];
let randomGauseX2 = [];
let randomGauseY2 = [];
let randomGauseX3 = [];
let randomGauseY3 = [];

let randomSize1 = [];
let randomSize2 = [];
let randomSize3 = [];

let Rslider;
let Gslider;
let Bslider;
let mojiMinslider;
let mojiMaxslider;

let Rval;
let Gval;
let Bval;
let mojiMin;
let mojiMax;

let saveButton;
let resetButton;
let randomizeButton;

let dann;

function setup() {
  createCanvas(800, 800);
  clickCount = 0;
  saveCount = 0;
  SentakuMode = 0;
  GamenMode = 0;

  Rslider = createSlider(0, 255, 0);
  Gslider = createSlider(0, 255, 0);
  Bslider = createSlider(0, 255, 0);

  Rslider.position(450, 60);
  Gslider.position(450, 80);
  Bslider.position(450, 100);

  Rslider.style('width', '140px');
  Gslider.style('width', '140px');
  Bslider.style('width', '140px');
  
  mojiMinslider = createSlider(0, 15, 2);
  mojiMaxslider = createSlider(0, 20, 9);
  mojiMinslider.position(450, 140);
  mojiMaxslider.position(450, 160);
  mojiMinslider.style('width', '140px');
  mojiMaxslider.style('width', '140px');

  saveButton = createButton('save');
  saveButton.position(415, 370);
  saveButton.mousePressed(MojiSave);

  resetButton = createButton('reset');
  resetButton.position(490, 370);
  resetButton.mousePressed(reset);

  randomizeButton = createButton('randomize');
  randomizeButton.position(415, 240);
  randomizeButton.mousePressed(randomize);
}

function draw() {
  background(200);

  stroke(230);
  strokeWeight(3);
  for (let i = 1; i < 8; i++) {
    line(100 * i, 0, 100 * i, 800);
  }
  for (let i = 1; i < 8; i++) {
    line(0, 100 * i, 800, 100 * i);
  }

  noStroke();
  fill(180);
  rect(0, 0, 605, 405, 5);
  fill(230);
  rect(0, 0, 400, 400);
  rect(800, 0, 1600, 800);

  noStroke();
  fill(210);
  rect(400, 0, 200, 400);

  rectMode(CENTER);
  fill(255, 0, 0);
  rect(430, 67, 15, 15);
  fill(0, 255, 0);
  rect(430, 87, 15, 15);
  fill(0, 0, 255);
  rect(430, 107, 15, 15);

  rectMode(CORNER);
  
  fill(0);
  circle(430, 147, 10);
  circle(430, 167, 20);

  Rval = Rslider.value();
  Gval = Gslider.value();
  Bval = Bslider.value();
  
  mojiMin = 3 + mojiMinslider.value();
  mojiMax = 31 + mojiMaxslider.value();

  stroke(Rval, Gval, Bval);
  fill(Rval, Gval, Bval);

  if (SentakuMode == 0) {
    LineCircle(x, y, Size);
  }
  dann = 0;

  for (let i = 0; i < 8; i++) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX1[i + 16 * l]);
      randomGauseY.push(randomGauseY1[i + 16 * l]);
      randomFutosa.push(randomSize1[i + 16 * l]);
    }

    if (i % 2 == 0) {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 600, dann * 100);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
    } else {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 700, dann * 100);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
      dann++;
    }
  }

  dann = 0;
  for (let i = 0; i < 8; i++) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX2[i + 16 * l]);
      randomGauseY.push(randomGauseY2[i + 16 * l]);
      randomFutosa.push(randomSize2[i + 16 * l]);
    }

    if (i % 2 == 0) {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 0, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
    } else {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 100, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
      dann++;
    }
  }

  dann = 0;
  for (let i = 0; i < 8; i++) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX1[i + 16 * l + 8]);
      randomGauseY.push(randomGauseY1[i + 16 * l + 8]);
      randomFutosa.push(randomSize2[i + 16 * l + 8]);
    }

    if (i % 2 == 0) {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 200, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
    } else {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 300, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
      dann++;
    }
  }
  
  dann = 0;
  for (let i = 0; i < 8; i++) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX2[i + 16 * l + 8]);
      randomGauseY.push(randomGauseY2[i + 16 * l + 8]);
      randomFutosa.push(randomSize1[i + 16 * l + 8]);
    }

    if (i % 2 == 0) {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 400, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
    } else {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 500, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
      dann++;
    }
  }
  
  dann = 0;
  for (let i = 0; i < 8; i++) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX3[i + 8 * l]);
      randomGauseY.push(randomGauseY3[i + 8 * l]);
      randomFutosa.push(randomSize3[i + 8 * l]);
    }

    if (i % 2 == 0) {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 600, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
    } else {
      push();
      applyMatrix(0.25, 0, 0, 0.25, 700, dann * 100 + 400);
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
      pop();
      dann++;
    }
  }

  if (SentakuMode == 1) {
    
    if (GamenMode == 0){
      LineCircle(x, y, Size);
    }
    
    if (GamenMode >= 1 && GamenMode <= 8) {

      const randomGauseX = [];
      const randomGauseY = [];
      const randomFutosa = [];

      for (let l = 0; l < clickCount; l++) {
        randomGauseX.push(randomGauseX1[GamenMode - 1 + 16 * l]);
        randomGauseY.push(randomGauseY1[GamenMode - 1 + 16 * l]);
        randomFutosa.push(randomSize1[GamenMode - 1 + 16 * l]);
      }
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
    }
    if (GamenMode >= 9 && GamenMode <= 16) {

      const randomGauseX = [];
      const randomGauseY = [];
      const randomFutosa = [];

      for (let l = 0; l < clickCount; l++) {
        randomGauseX.push(randomGauseX2[GamenMode - 9 + 16 * l]);
        randomGauseY.push(randomGauseY2[GamenMode - 9 + 16 * l]);
        randomFutosa.push(randomSize2[GamenMode - 9 + 16 * l]);
      }
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
    }
    if (GamenMode >= 17 && GamenMode <= 24) {

      const randomGauseX = [];
      const randomGauseY = [];
      const randomFutosa = [];

      for (let l = 0; l < clickCount; l++) {
        randomGauseX.push(randomGauseX1[GamenMode - 17 + 16 * l + 8]);
        randomGauseY.push(randomGauseY1[GamenMode - 17 + 16 * l + 8]);
        randomFutosa.push(randomSize2[GamenMode - 17 + 16 * l + 8]);
      }
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
    }
    if (GamenMode >= 25 && GamenMode <= 32) {

      const randomGauseX = [];
      const randomGauseY = [];
      const randomFutosa = [];

      for (let l = 0; l < clickCount; l++) {
        randomGauseX.push(randomGauseX2[GamenMode - 25 + 16 * l + 8]);
        randomGauseY.push(randomGauseY2[GamenMode - 25 + 16 * l + 8]);
        randomFutosa.push(randomSize1[GamenMode - 25 + 16 * l + 8]);
      }
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
    }
    if (GamenMode >= 33 && GamenMode <= 40) {

      const randomGauseX = [];
      const randomGauseY = [];
      const randomFutosa = [];

      for (let l = 0; l < clickCount; l++) {
        randomGauseX.push(randomGauseX3[GamenMode - 33 + 8 * l]);
        randomGauseY.push(randomGauseY3[GamenMode - 33 + 8 * l]);
        randomFutosa.push(randomSize3[GamenMode - 33 + 8 * l]);
      }
      LineCircle(randomGauseX, randomGauseY, randomFutosa);
    }
  }
}

function mousePressed() {
  if (mouseButton == LEFT) {
    if (mouseX < 400 && mouseY < 400 && SentakuMode == 0) {
      x.push(mouseX);
      y.push(mouseY);
      interrupt.push(0);

      Size.push(random(mojiMin + 3, mojiMax - 4));

      randomSeisei(mouseX, mouseY);

      clickCount++;
    } else if (mouseX > 400 && mouseX < 600 && mouseY < 400) {} else {
      SentakuMode = 1;
      if (mouseX > 600 && mouseX < 700 && mouseY < 100) {
        GamenMode = 1;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY < 100) {
        GamenMode = 2;
      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 100 && mouseY < 200) {
        GamenMode = 3;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 100 && mouseY < 200) {
        GamenMode = 4;
      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 200 && mouseY < 300) {
        GamenMode = 5;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 200 && mouseY < 300) {
        GamenMode = 6;
      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 300 && mouseY < 400) {
        GamenMode = 7;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 300 && mouseY < 400) {
        GamenMode = 8;
      }

      if (mouseX < 100 && mouseY > 400 && mouseY < 500) {
        GamenMode = 9;
      }
      if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 500) {
        GamenMode = 10;
      }
      if (mouseX < 100 && mouseY > 500 && mouseY < 600) {
        GamenMode = 11;
      }
      if (mouseX > 100 && mouseX < 200 && mouseY > 500 && mouseY < 600) {
        GamenMode = 12;
      }
      if (mouseX < 100 && mouseY > 600 && mouseY < 700) {
        GamenMode = 13;
      }
      if (mouseX > 100 && mouseX < 200 && mouseY > 600 && mouseY < 700) {
        GamenMode = 14;
      }
      if (mouseX < 100 && mouseY > 700 && mouseY < 800) {
        GamenMode = 15;
      }
      if (mouseX > 100 && mouseX < 200 && mouseY > 700 && mouseY < 800) {
        GamenMode = 16;
      }

      if (mouseX > 200 && mouseX < 300 && mouseY > 400 && mouseY < 500) {
        GamenMode = 17;
      }
      if (mouseX > 300 && mouseX < 400 && mouseY > 400 && mouseY < 500) {
        GamenMode = 18;
      }
      if (mouseX > 200 && mouseX < 300 && mouseY > 500 && mouseY < 600) {
        GamenMode = 19;
      }
      if (mouseX > 300 && mouseX < 400 && mouseY > 500 && mouseY < 600) {
        GamenMode = 20;
      }
      if (mouseX > 200 && mouseX < 300 && mouseY > 600 && mouseY < 700) {
        GamenMode = 21;
      }
      if (mouseX > 300 && mouseX < 400 && mouseY > 600 && mouseY < 700) {
        GamenMode = 22;
      }
      if (mouseX > 200 && mouseX < 300 && mouseY > 700 && mouseY < 800) {
        GamenMode = 23;
      }
      if (mouseX > 300 && mouseX < 400 && mouseY > 700 && mouseY < 800) {
        GamenMode = 24;
      }
      
      if (mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 500) {
        GamenMode = 25;
      }
      if (mouseX > 500 && mouseX < 600 && mouseY > 400 && mouseY < 500) {
        GamenMode = 26;
      }
      if (mouseX > 400 && mouseX < 500 && mouseY > 500 && mouseY < 600) {
        GamenMode = 27;
      }
      if (mouseX > 500 && mouseX < 600 && mouseY > 500 && mouseY < 600) {
        GamenMode = 28;
      }
      if (mouseX > 400 && mouseX < 500 && mouseY > 600 && mouseY < 700) {
        GamenMode = 29;
      }
      if (mouseX > 500 && mouseX < 600 && mouseY > 600 && mouseY < 700) {
        GamenMode = 30;
      }
      if (mouseX > 400 && mouseX < 500 && mouseY > 700 && mouseY < 800) {
        GamenMode = 31;
      }
      if (mouseX > 500 && mouseX < 600 && mouseY > 700 && mouseY < 800) {
        GamenMode = 32;
      }
      
      if (mouseX > 600 && mouseX < 700 && mouseY > 400 && mouseY < 500) {
        GamenMode = 33;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 400 && mouseY < 500) {
        GamenMode = 34;
      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 500 && mouseY < 600) {
        GamenMode = 35;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 500 && mouseY < 600) {
        GamenMode = 36;
      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 600 && mouseY < 700) {
        GamenMode = 37;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 600 && mouseY < 700) {
        GamenMode = 38;
      }
      if (mouseX > 600 && mouseX < 700 && mouseY > 700 && mouseY < 800) {
        GamenMode = 39;
      }
      if (mouseX > 700 && mouseX < 800 && mouseY > 700 && mouseY < 800) {
        GamenMode = 40;
      }
    }
  }
  if (mouseButton == RIGHT) {
    interrupt[clickCount - 1] = 1;
  }
}

function keyTyped() {
  if (key === 's') {
    MojiSave();
  }
}

function keyPressed(){
  if (keyCode === SHIFT) {
    interrupt[clickCount - 1] = 1;
  }
}

function randomSeisei(kihonX, kihonY) {
  for (let i = 0; i < 16; i++) {
    randomSize1.push(random(mojiMin, mojiMax));
    randomSize2.push(random(mojiMin + 5, mojiMax - 7));
    
    radomGauseMouseX = randomGaussian(kihonX, 8);
    radomGauseMouseY = randomGaussian(kihonY, 8);
    randomGauseX1.push(radomGauseMouseX);
    randomGauseY1.push(radomGauseMouseY);
    
    radomGauseMouseX = randomGaussian(kihonX, 15);
    radomGauseMouseY = randomGaussian(kihonY, 15);
    randomGauseX2.push(radomGauseMouseX);
    randomGauseY2.push(radomGauseMouseY);
  }
  for (let i = 0; i < 8; i++) {
    randomSize3.push(random(mojiMin, mojiMax));
    
    if (randomSize3[i] > 25){
      radomGauseMouseX = randomGaussian(kihonX, 6);
      radomGauseMouseY = randomGaussian(kihonY, 6);
    } else if(randomSize3[i] > 15) {
      radomGauseMouseX = randomGaussian(kihonX, 12);
      radomGauseMouseY = randomGaussian(kihonY, 12);
    } else {
      radomGauseMouseX = randomGaussian(kihonX, 18);
      radomGauseMouseY = randomGaussian(kihonY, 18);
    }
    randomGauseX3.push(radomGauseMouseX);
    randomGauseY3.push(radomGauseMouseY);
  }
}

function reset() {
  x = [];
  y = [];
  Size = [];
  interrupt = [];
  randomGauseX1 = [];
  randomGauseY1 = [];
  randomGauseX2 = [];
  randomGauseY2 = [];
  randomGauseX3 = [];
  randomGauseY3 = [];
  randomSize1 = [];
  randomSize2 = [];
  randomSize3 = [];
  clickCount = 0;
  SentakuMode = 0;
  GamenMode = 0;
}

function randomize() {
  
  let XX = [];
  let YY = [];
  let randomGauseXX1 = [];
  let randomGauseYY1 = [];
  let randomGauseXX2 = [];
  let randomGauseYY2 = [];
  let randomGauseXX3 = [];
  let randomGauseYY3 = [];
  let randomSize11 = [];
  let randomSize22 = [];
  let randomSize33 = [];
  
  XX = x;
  YY = y;
  randomGauseXX1 = randomGauseX1;
  randomGauseYY1 = randomGauseY1;
  randomGauseXX2 = randomGauseX2;
  randomGauseYY2 = randomGauseY2;
  randomGauseXX3 = randomGauseX3;
  randomGauseYY3 = randomGauseY3;
  randomSize11 = randomSize1;
  randomSize22 = randomSize2;
  randomSize33 = randomSize3;
  
  x = [];
  y = [];
  randomGauseX1 = [];
  randomGauseY1 = [];
  randomGauseX2 = [];
  randomGauseY2 = [];
  randomGauseX3 = [];
  randomGauseY3 = [];
  randomSize1 = [];
  randomSize2 = [];
  randomSize3 = [];
  
  if (GamenMode == 0) {
    x = XX;
    y = YY;
  }
  if (GamenMode >= 1 && GamenMode <= 8) {
    
    Size = [];
    for (let l = 0; l < clickCount; l++) {
      x.push(randomGauseXX1[GamenMode - 1 + 16 * l]);
      y.push(randomGauseYY1[GamenMode - 1 + 16 * l]);
      Size.push(randomSize11[GamenMode - 1 + 16 * l]);
    }
  }
  if (GamenMode >= 9 && GamenMode <= 16) {
    
    Size = [];
    for (let l = 0; l < clickCount; l++) {
      x.push(randomGauseXX2[GamenMode - 9 + 16 * l]);
      y.push(randomGauseYY2[GamenMode - 9 + 16 * l]);
      Size.push(randomSize22[GamenMode - 9 + 16 * l]);
    }
  }
  if (GamenMode >= 17 && GamenMode <= 24) {
    
    Size = [];
    for (let l = 0; l < clickCount; l++) {
      x.push(randomGauseXX1[GamenMode - 17 + 16 * l + 8]);
      y.push(randomGauseYY1[GamenMode - 17 + 16 * l + 8]);
      Size.push(randomSize22[GamenMode - 17 + 16 * l + 8]);
    }
  }
  if (GamenMode >= 25 && GamenMode <= 32) {
    
    Size = [];
    for (let l = 0; l < clickCount; l++) {
      x.push(randomGauseXX2[GamenMode - 25 + 16 * l + 8]);
      y.push(randomGauseYY2[GamenMode - 25 + 16 * l + 8]);
      Size.push(randomSize11[GamenMode - 25 + 16 * l + 8]);
    }
  }
  if (GamenMode >= 33 && GamenMode <= 40) {
    
    Size = [];
    for (let l = 0; l < clickCount; l++) {
      x.push(randomGauseXX3[GamenMode - 33 + 8 * l]);
      y.push(randomGauseYY3[GamenMode - 33 + 8 * l]);
      Size.push(randomSize33[GamenMode - 33 + 8 * l]);
    }
  }
  for (let i = 0; i < clickCount; i++){
    randomSeisei(x[i], y[i]);
  }
  GamenMode = 0;
}

function MojiSave() {

  pg[saveCount] = createGraphics(400, 400);
  pg[saveCount].background(0, 0, 0, 0);

  if (GamenMode == 0) {
    LineCirclePG(x, y, Size);
  }
  if (GamenMode >= 1 && GamenMode <= 8) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX1[GamenMode - 1 + 16 * l]);
      randomGauseY.push(randomGauseY1[GamenMode - 1 + 16 * l]);
      randomFutosa.push(randomSize2[GamenMode - 1 + 16 * l]);
    }
    LineCirclePG(randomGauseX, randomGauseY, randomFutosa);
  }
  if (GamenMode >= 9 && GamenMode <= 16) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX2[GamenMode - 9 + 16 * l]);
      randomGauseY.push(randomGauseY2[GamenMode - 9 + 16 * l]);
      randomFutosa.push(randomSize2[GamenMode - 9 + 16 * l]);
    }
    LineCirclePG(randomGauseX, randomGauseY, randomFutosa);
  }
  if (GamenMode >= 17 && GamenMode <= 24) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX1[GamenMode - 17 + 16 * l + 8]);
      randomGauseY.push(randomGauseY1[GamenMode - 17 + 16 * l + 8]);
      randomFutosa.push(randomSize2[GamenMode - 17 + 16 * l + 8]);
    }
    LineCirclePG(randomGauseX, randomGauseY, randomFutosa);
  }
  if (GamenMode >= 25 && GamenMode <= 32) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX2[GamenMode - 25 + 16 * l + 8]);
      randomGauseY.push(randomGauseY2[GamenMode - 25 + 16 * l + 8]);
      randomFutosa.push(randomSize1[GamenMode - 25 + 16 * l + 8]);
    }
    LineCirclePG(randomGauseX, randomGauseY, randomFutosa);
  }
  if (GamenMode >= 33 && GamenMode <= 40) {
    const randomGauseX = [];
    const randomGauseY = [];
    const randomFutosa = [];

    for (let l = 0; l < clickCount; l++) {
      randomGauseX.push(randomGauseX3[GamenMode - 33 + 8 * l]);
      randomGauseY.push(randomGauseY3[GamenMode - 33 + 8 * l]);
      randomFutosa.push(randomSize3[GamenMode - 33 + 8 * l]);
    }
    LineCirclePG(randomGauseX, randomGauseY, randomFutosa);
  }
  pg[saveCount].save("moji.png");
  saveCount++;
}

function LineCircle(a, b, Futosa) {
  for (let i = 0; i < clickCount - 1; i++) {
    if (interrupt[i] == 1) {
      continue;
    }

    ax = a[i + 1] - b[i];
    ay = a[i + 1] - b[i];
    az = sqrt(sq(ax) + sq(ay));

    if (Futosa[i] < Futosa[i + 1]) {
      let ChokusenSoto = (Futosa[i + 1] - Futosa[i]) / 2;
      let SotoX = ay / az * ChokusenSoto;
      let SotoY = ax / az * ChokusenSoto;

      let SotoZahyouX1;
      let SotoZahyouY1;
      let SotoZahyouX2;
      let SotoZahyouY2;

      if (a[i + 1] > a[i]) {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i + 1] + SotoX;
          SotoZahyouY1 = b[i + 1] - SotoY;
          SotoZahyouX2 = a[i + 1] - SotoX;
          SotoZahyouY2 = b[i + 1] + SotoY;
        } else {
          SotoZahyouX1 = a[i + 1] + SotoX;
          SotoZahyouY1 = b[i + 1] + SotoY;
          SotoZahyouX2 = a[i + 1] - SotoX;
          SotoZahyouY2 = b[i + 1] - SotoY;
        }
      } else {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i + 1] + SotoX;
          SotoZahyouY1 = b[i + 1] + SotoY;
          SotoZahyouX2 = a[i + 1] - SotoX;
          SotoZahyouY2 = b[i + 1] - SotoY;
        } else {
          SotoZahyouX1 = a[i + 1] - SotoX;
          SotoZahyouY1 = b[i + 1] + SotoY;
          SotoZahyouX2 = a[i + 1] + SotoX;
          SotoZahyouY2 = b[i + 1] - SotoY;
        }
      }
      strokeWeight(Futosa[i]);
      line(a[i], b[i], SotoZahyouX1, SotoZahyouY1);
      line(a[i], b[i], SotoZahyouX2, SotoZahyouY2);

      let Umeru = ChokusenSoto / Futosa[i] * 2;
      if(Umeru <=  0) Umeru = -1*Umeru;
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX1 - a[i + 1];
        SotoYY = SotoZahyouY1 - b[i + 1];
        UmeX = a[i + 1] + SotoXX / Umeru * u;
        UmeY = b[i + 1] + SotoYY / Umeru * u;

        line(a[i], b[i], UmeX, UmeY);
      }
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX2 - a[i + 1];
        SotoYY = SotoZahyouY2 - b[i + 1];
        UmeX = a[i + 1] + SotoXX / Umeru * u;
        UmeY = b[i + 1] + SotoYY / Umeru * u;

        line(a[i], b[i], UmeX, UmeY);
      }
    } else if (Futosa[i] == Futosa[i + 1]) {
      strokeWeight(Futosa[i]);
      line(a[i], b[i], a[i + 1], b[i + 1]);
    } else if (Futosa[i] > Futosa[i + 1]) {
      let ChokusenSoto = (Futosa[i] - Futosa[i + 1]) / 2;
      let SotoX = ay / az * ChokusenSoto;
      let SotoY = ax / az * ChokusenSoto;

      let SotoZahyouX1;
      let SotoZahyouY1;
      let SotoZahyouX2;
      let SotoZahyouY2;

      if (a[i + 1] > a[i]) {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i] + SotoX;
          SotoZahyouY1 = b[i] - SotoY;
          SotoZahyouX2 = a[i] - SotoX;
          SotoZahyouY2 = b[i] + SotoY;
        } else {
          SotoZahyouX1 = a[i] + SotoX;
          SotoZahyouY1 = b[i] + SotoY;
          SotoZahyouX2 = a[i] - SotoX;
          SotoZahyouY2 = b[i] - SotoY;
        }
      } else {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i] + SotoX;
          SotoZahyouY1 = b[i] + SotoY;
          SotoZahyouX2 = a[i] - SotoX;
          SotoZahyouY2 = b[i] - SotoY;
        } else {
          SotoZahyouX1 = a[i] - SotoX;
          SotoZahyouY1 = b[i] + SotoY;
          SotoZahyouX2 = a[i] + SotoX;
          SotoZahyouY2 = b[i] - SotoY;
        }
      }
      strokeWeight(Futosa[i + 1]);
      line(a[i + 1], b[i + 1], SotoZahyouX1, SotoZahyouY1);
      line(a[i + 1], b[i + 1], SotoZahyouX2, SotoZahyouY2);

      let Umeru = ChokusenSoto / Futosa[i + 1] * 2;
      if(Umeru <=  0) Umeru = -1*Umeru;
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX1 - a[i];
        SotoYY = SotoZahyouY1 - b[i];
        UmeX = a[i] + SotoXX / Umeru * u;
        UmeY = b[i] + SotoYY / Umeru * u;

        line(a[i+1], b[i+1], UmeX, UmeY);
      }
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX2 - a[i];
        SotoYY = SotoZahyouY2 - b[i];
        UmeX = a[i] + SotoXX / Umeru * u;
        UmeY = b[i] + SotoYY / Umeru * u;

        line(a[i+1], b[i+1], UmeX, UmeY);
      }
    }
  }
  strokeWeight(0);
  
  for (let i = 0; i < clickCount; i++) {
    circle(a[i], b[i], Futosa[i]);
  }
}

function LineCirclePG(a, b, Futosa) {
  for (let i = 0; i < clickCount - 1; i++) {
    if (interrupt[i] == 1) {
      continue;
    }
    pg[saveCount].stroke(Rval,Gval,Bval);

    ax = a[i + 1] - b[i];
    ay = a[i + 1] - b[i];
    az = sqrt(sq(ax) + sq(ay));

    if (Futosa[i] < Futosa[i + 1]) {
      let ChokusenSoto = (Futosa[i + 1] - Futosa[i]) / 2;
      let SotoX = ay / az * ChokusenSoto;
      let SotoY = ax / az * ChokusenSoto;

      let SotoZahyouX1;
      let SotoZahyouY1;
      let SotoZahyouX2;
      let SotoZahyouY2;

      if (a[i + 1] > a[i]) {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i + 1] + SotoX;
          SotoZahyouY1 = b[i + 1] - SotoY;
          SotoZahyouX2 = a[i + 1] - SotoX;
          SotoZahyouY2 = b[i + 1] + SotoY;
        } else {
          SotoZahyouX1 = a[i + 1] + SotoX;
          SotoZahyouY1 = b[i + 1] + SotoY;
          SotoZahyouX2 = a[i + 1] - SotoX;
          SotoZahyouY2 = b[i + 1] - SotoY;
        }
      } else {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i + 1] + SotoX;
          SotoZahyouY1 = b[i + 1] + SotoY;
          SotoZahyouX2 = a[i + 1] - SotoX;
          SotoZahyouY2 = b[i + 1] - SotoY;
        } else {
          SotoZahyouX1 = a[i + 1] - SotoX;
          SotoZahyouY1 = b[i + 1] + SotoY;
          SotoZahyouX2 = a[i + 1] + SotoX;
          SotoZahyouY2 = b[i + 1] - SotoY;
        }
      }
      pg[saveCount].strokeWeight(Futosa[i]);
      pg[saveCount].line(a[i], b[i], SotoZahyouX1, SotoZahyouY1);
      pg[saveCount].line(a[i], b[i], SotoZahyouX2, SotoZahyouY2);

      let Umeru = ChokusenSoto / Futosa[i] * 2;
      if(Umeru <=  0) Umeru = -1*Umeru;
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX1 - a[i + 1];
        SotoYY = SotoZahyouY1 - b[i + 1];
        UmeX = a[i + 1] + SotoXX / Umeru * u;
        UmeY = b[i + 1] + SotoYY / Umeru * u;

        pg[saveCount].line(a[i], b[i], UmeX, UmeY);
      }
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX2 - a[i + 1];
        SotoYY = SotoZahyouY2 - b[i + 1];
        UmeX = a[i + 1] + SotoXX / Umeru * u;
        UmeY = b[i + 1] + SotoYY / Umeru * u;

        pg[saveCount].line(a[i], b[i], UmeX, UmeY);
      }
    } else if (Futosa[i] == Futosa[i + 1]) {
      pg[saveCount].strokeWeight(Futosa[i]);
      pg[saveCount].line(a[i], b[i], a[i + 1], b[i + 1]);
      
    } else if (Futosa[i] > Futosa[i + 1]) {
      let ChokusenSoto = (Futosa[i] - Futosa[i + 1]) / 2;
      let SotoX = ay / az * ChokusenSoto;
      let SotoY = ax / az * ChokusenSoto;

      let SotoZahyouX1;
      let SotoZahyouY1;
      let SotoZahyouX2;
      let SotoZahyouY2;

      if (a[i + 1] > a[i]) {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i] + SotoX;
          SotoZahyouY1 = b[i] - SotoY;
          SotoZahyouX2 = a[i] - SotoX;
          SotoZahyouY2 = b[i] + SotoY;
        } else {
          SotoZahyouX1 = a[i] + SotoX;
          SotoZahyouY1 = b[i] + SotoY;
          SotoZahyouX2 = a[i] - SotoX;
          SotoZahyouY2 = b[i] - SotoY;
        }
      } else {
        if (b[i + 1] > b[i]) {
          SotoZahyouX1 = a[i] + SotoX;
          SotoZahyouY1 = b[i] + SotoY;
          SotoZahyouX2 = a[i] - SotoX;
          SotoZahyouY2 = b[i] - SotoY;
        } else {
          SotoZahyouX1 = a[i] - SotoX;
          SotoZahyouY1 = b[i] + SotoY;
          SotoZahyouX2 = a[i] + SotoX;
          SotoZahyouY2 = b[i] - SotoY;
        }
      }
      pg[saveCount].strokeWeight(Futosa[i + 1]);
      pg[saveCount].line(a[i + 1], b[i + 1], SotoZahyouX1, SotoZahyouY1);
      pg[saveCount].line(a[i + 1], b[i + 1], SotoZahyouX2, SotoZahyouY2);

      let Umeru = ChokusenSoto / Futosa[i + 1] * 2;
      if(Umeru <=  0) Umeru = -1*Umeru;
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX1 - a[i];
        SotoYY = SotoZahyouY1 - b[i];
        UmeX = a[i] + SotoXX / Umeru * u;
        UmeY = b[i] + SotoYY / Umeru * u;

        pg[saveCount].line(a[i+1], b[i+1], UmeX, UmeY);
      }
      for (let u = 0; u < Umeru; u++) {
        SotoXX = SotoZahyouX2 - a[i];
        SotoYY = SotoZahyouY2 - b[i];
        UmeX = a[i] + SotoXX / Umeru * u;
        UmeY = b[i] + SotoYY / Umeru * u;

        pg[saveCount].line(a[i+1], b[i+1], UmeX, UmeY);
      }
    }
  }
  pg[saveCount].strokeWeight(0);
  pg[saveCount].fill(Rval, Gval, Bval);
  
  for (let i = 0; i < clickCount; i++) {
    pg[saveCount].circle(a[i], b[i], Futosa[i]);
  }
}