//------------------------------------------------------
//------------------------------------------------------------------
//sketch two
// Sketch two
//p5.disableFriendlyErrors = true;
var n = function (m) {
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    ",",
    ".",
  ];

  let threadI = []; //thread column array
  let rowsThread2 = 5; //thread rows number
  let maxThreadLen = 50; //max thread column number
  let margin = 15; //width and height value of one square
  let shiftThreadVal2 = 0;
  let x2 = 0;

  let shiftDeltaTime = 1000; //in miliseconds 1 sn
  let currentTime = 0;

  let inputTxt2;
  let myButton;
  let myInp2; //text input inside bar
  //let myText; //interactive text

  m.setup = function () {
    // m.createCanvas(canvasWidth, 100);
    // var canvas2 = m.createCanvas(canvasWidth, 100);
    //canvas2.parent("main");
    m.createCanvas(1200, 100);
    // Init draft items
    for (let i = 0; i < maxThreadLen; i++) {
      threadI[i] = [];

      for (let j = 0; j < rowsThread2; j++) {
        let x2 = i * margin + 10;
        let y2 = j * margin + 10;
        let w2 = 20;
        let h2 = 20;
        threadI[i][j] = new Draft2(x2, y2, w2, h2, "#000000", "");
      }
    }

    //input field
    myInp2 = m.createInput("");
    myInp2.position(10, 600 - 32);
    myInp2.size(1200 - 33);
    myInp2.input(typingMotion); //typing fonksiyonu tanımladım aşağıda

    //submit button
    /*myButton = createButton("submit");
  myButton.position(myInp.x + myInp.width, 0);
  myButton.mousePressed();*/

    //myText = "";
    //inputTxt = "";
    inputTxt2 = "abcde";

    currentTime = m.millis();
  };

  //type ettiğimiz harfleri inputTxt ye atadım
  m.typingMotion = function () {
    inputTxt2 = this.value();
    if (inputTxt2.length > maxThreadLen) {
      let diff = inputTxt2.length - maxThreadLen;
      inputTxt2 = inputTxt2.slice(diff);
    }

    // console.log(inputTxt2);
    //console.log("you are typing: ", this.value());
  };

  m.draw = function () {
    m.background(20);
    m.textAlign(CENTER, CENTER);
    m.textSize(20);
    m.text("real time input: " + myInp2.value(), 20, height - 10);
    //text(myText, 20, 300);

    //harflerin yerlerini modüloya göre hesapıyoruz
    for (let i = 0; i < maxThreadLen; i++) {
      let letter2 = inputTxt2[i];
      let letterIndex2 = letters.indexOf(letter2) % 5;

      for (let j = 0; j < rowsThread2; j++) {
        //Elemanlar sağ taraftan gelmesi için

        if (letterIndex2 != -1 && letterIndex2 == j) {
          // mirrored text right to left
          var currentId2 = shiftThreadVal2 - i;

          // Eğer shiftThreadVal negatif ise;
          // elemanı sona at ve currentId'si ne ise
          // maxThreadLen'den çıkart
          if (currentId2 < 0) {
            // currentId negatif değer olduğu için toplama işareti kullandık
            threadI[maxThreadLen + currentId2][j].setMotionClicked();
          } else {
            threadI[currentId2][j].setMotionClicked();
            // Eğer shiftThreadVal negatif değilse;
          }
        }

        threadI[i][j].showMotion();
      }
    }

    // noLoop();
    if (millis() - currentTime > shiftDeltaTime) {
      currentTime = m.millis();
      m.clearAllThreads();
      shiftThreadVal2++;
      shiftThreadVal2 = shiftThreadVal2 % maxThreadLen;
    }
  };

  m.startDraftDraw = function () {};

  m.clearAllThreads = function () {
    for (let i = 0; i < maxThreadLen; i++) {
      for (let j = 0; j < rowsThread2; j++) {
        threadI[i][j].setMotionUnclicked();
      }
    }
  };
  m.mousePressed = function () {};

  m.keyPressed = function () {
    if (key == "s") {
      //save("test.jpg");
    }
  };
};
var myp5 = new p5(n, "canvas2");
