let userText = ""
let letterList = [
  ["1", "q", "a", "z"],
  ["2", "w", "s", "x"],
  ["3", "e", "d", "c"],
  ["4", "r", "f", "v"],
  ["5", "t", "g", "b"],
  ["6", "y", "h", "n"],
  ["7", "u", "j", "m"],
  ["8", "i", "k", ","],
  ["9", "o", "l", "."],
  ["0", "p", ";", "/"],
  ["-", "[", "'", ],
  ["=", "]"]
];
let activeLetters = []

let lettersOnScreen = 4
let wordsMinSpeed = 1
let wordsMaxSpeed = 2
let score = 0
let miss = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function draw() {
  background(220);
  drawLines()
  drawDots()
  drawFingers()
  checkActiveLetters()
  checkMatchingLetters()
  for (var letter of activeLetters) {
    letter.move()
    letter.show()
  }
  text(userText, width / 2, height * 3 / 4)
  text("score: " + str(score), width / 2 - 100, 30)
  text("miss: " + str(miss), width / 2 + 100, 30)

}

function drawLines() {
  strokeWeight(4)
  for (i = 0; i < 13; i++) {
    if (i < 6) {
      stroke(0, 0, 200)
    } else if (i >= 6) {
      stroke(200, 0, 0)
    }
    line(width / 4 - width / 48 + i * width / 24, 0, width / 4 - width / 48 + i * width / 24, height)
  }
  stroke(0)
  strokeWeight(1)
}

function drawDots() {
  for (i = 0; i < 12; i++) {
    if (i == 0 || i == 9 || i == 10 || i == 11) {
      fill(255, 102, 203)
    } else if (i == 1 || i == 8) {
      fill(255, 0, 50)
    } else if (i == 2 || i == 7) {
      fill(10, 10, 255)
    } else if (i == 3 || i == 4) {
      fill(255, 255, 0)
    } else if (i == 5 || i == 6) {
      fill(255, 165, 0)
    }
    ellipse(width / 4 + i * width / 24, height * 0.9, 20, 20)
  }
  fill(0)
}

function drawFingers() {

  noFill()
  stroke(0)
  strokeWeight(3)
  for (i = 0; i < 4; i++) {
    ellipse(width / 4 + i * width / 24, height * 0.9, 30, 30)
    line(width / 4 + i * width / 24, height*0.9+14, width / 4 + i * width / 24,height)

  }
  for (i = 6; i < 10; i++) {
    ellipse(width / 4 + i * width / 24, height * 0.9, 30, 30)
    line(width / 4 + i * width / 24, height*0.9+14, width / 4 + i * width / 24,height)
  }
  
  fill(0)
  stroke(0)
  strokeWeight(1)
}

function checkActiveLetters() {

  // keeps letters on screen
  if (activeLetters.length < lettersOnScreen) {
    set = random(letterList)
    index = letterList.indexOf(set)
    letter = random(set)

    start = windowWidth / 4
    slots = windowWidth / 24

    l = new Letter(letter, start + slots * index, 0, 0 - random(100, 1000), random(wordsMinSpeed, wordsMaxSpeed));
    activeLetters.push(l);
  }

  // removes words that goes below the screen
  for (var l of activeLetters) {
    if (l.y > windowHeight) {
      index = activeLetters.indexOf(l)
      if (index > -1) {
        l.resetY();
        activeLetters.splice(index, 1);
        miss += 1
      }
    }
  }

}

function checkMatchingLetters() {
  for (var letter of activeLetters) {
    if (letter.name == userText) {
      userText = "";
      score += 1
      index = activeLetters.indexOf(letter)
      if (index > -1) {
        letter.resetY()
        activeLetters.splice(index, 1);
      }
    }
  }

}

class Letter {

  constructor(letter, x, y, dx, dy) {
    this.name = letter
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
  }
  move() {
    this.y += this.dy
  }

  show() {
    textSize(32);
    text(this.name, this.x, this.y)
  }

  resetY() {
    this.y = 0 - random(100, 1000);
  }
}

function keyPressed() {
  if (key === 'a') {
    userText = 'a';
  }
  if (key === 'b') {
    userText = 'b';
  }
  if (key === 'c') {
    userText = 'c';
  }
  if (key === 'd') {
    userText = 'd';
  }
  if (key === 'e') {
    userText = 'e';
  }
  if (key === 'f') {
    userText = 'f';
  }
  if (key === 'g') {
    userText = 'g';
  }
  if (key === 'h') {
    userText = 'h';
  }
  if (key === 'i') {
    userText = 'i';
  }
  if (key === 'j') {
    userText = 'j';
  }
  if (key === 'k') {
    userText = 'k';
  }
  if (key === 'l') {
    userText = 'l';
  }
  if (key === 'm') {
    userText = 'm';
  }
  if (key === 'n') {
    userText = 'n';
  }
  if (key === 'o') {
    userText = 'o';
  }
  if (key === 'p') {
    userText = 'p';
  }
  if (key === 'q') {
    userText = 'q';
  }
  if (key === 'r') {
    userText = 'r';
  }
  if (key === 's') {
    userText = 's';
  }
  if (key === 't') {
    userText = 't';
  }
  if (key === 'u') {
    userText = 'u';
  }
  if (key === 'v') {
    userText = 'v';
  }
  if (key === 'w') {
    userText = 'w';
  }
  if (key === 'x') {
    userText = 'x';
  }
  if (key === 'y') {
    userText = 'y';
  }
  if (key === 'z') {
    userText = 'z';
  }
  if (key === ' ') {
    userText = ' ';
  }
  if (key === ',') {
    userText = ',';
  }
  if (key === '.') {
    userText = '.';
  }
  if (key === '/') {
    userText = '/';
  }
  if (key === '[') {
    userText = '[';
  }
  if (key === ']') {
    userText = ']';
  }
  if (key === '1') {
    userText = '1';
  }
  if (key === '2') {
    userText = '2';
  }
  if (key === '3') {
    userText = '3';
  }
  if (key === '4') {
    userText = '4';
  }
  if (key === '5') {
    userText = '5';
  }
  if (key === '6') {
    userText = '6';
  }
  if (key === '7') {
    userText = '7';
  }
  if (key === '8') {
    userText = '8';
  }
  if (key === '9') {
    userText = '9';
  }
  if (key === '0') {
    userText = '0';
  }
  if (key === '-') {
    userText = '-';
  }
  if (key === '=') {
    userText = '=';
  }
  if (key === "'") {
    userText = "'";
  }
  if (key === ";") {
    userText = ";";
  }
  if (keyCode === 8) {
    userText = '';
  }
  // if (keyCode === 13) {
  //   userText = "Enter";
  // }
}