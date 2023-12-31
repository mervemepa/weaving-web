p5.disableFriendlyErrors = true;

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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let inputTxt;

//----------------------------------------

let threads = []; //thread array
let tieUp = []; //tieUp array - right corner
let pedals = []; //pedals array - right side
let drawDown = []; //main draft pattern at middle
let numColsTxt = []; //column number text of threads at top
let numPedalsTxt = []; //row numberstext of pedals
//------------------------------------------
let colsThread; //column number of Thread
let rowsThread; //row number of Thread
let colsTieUp; //column number of TieUp
let rowsTieUp; //row number of TieUp
let colsPedal; //column number of Pedals
let rowsPedal; //row number of Pedals
let cols;
let rows;
//------------------------------------------
//let space; //space between main rectange boxes
//let margin; //width of one little square
let bord; //bordures between bars
let w; //each little box width
let h; //each little box height
let cl; //color of empty boxes
//-------------------------------------------

let button_clean; //cleans thread, tieUp and pedal parts

//-------------------------------------------
let activeThreadsArr = [];
let activePedalsArr = [];
let activeTieUpArr = [];
//--------------------------------------------
let settings;
let debugMode = 0;

let shiftThreadVal = 0;
let shiftPedalVal = 0;
let x = 0;
let y = 0;
//--------------------------------------------
let myButton; //button for entering text
let myInp; //text input inside bar
//let sliderBackgrnd;
//--------------------------------------------
let tieUpDataBase; //json file for tie up pattern types
let tieUp_Data;
let tieup_Data_src;

function preload() {
  settings = loadJSON("assets/settings.json");
  tieup_Data_src = loadJSON("assets/tieUpDataBase.json");
}

function setup() {
  createCanvas(800, 600);
  //slider for bacground color
  /*colorMode(HSB);
  sliderBackgrnd = createSlider(0, 360, 60, 40);
  sliderBackgrnd.position(10, 10);
  sliderBackgrnd.style("width", "80px");
  */

  colsTieUp = settings.colsTieUp;
  rowsTieUp = settings.rowsTieUp;

  colsThread = settings.colsThread;
  rowsThread = settings.rowsThread;

  w = settings.w;
  h = settings.h;
  cl = settings.cl;
  tieUp_Data = tieup_Data_src.tieUp;

  //space = settings.space;
  //margin = settings.margin;

  bord = settings.bord;
  debugMode = settings.debug;

  initGUI();

  //for total canvas calculation
  cols = width / w;
  rows = height / h;

  //input letters-sentences-words-characters or numbers
  inputTxt = " ";

  //input field
  myInp = createInput("");
  myInp.position(colsThread * w + bord + colsTieUp * w + bord + 10, 30);
  myInp.size(92);
  myInp.input(typing); //typing fonksiyonu tanımladım aşağıda

  //submit button
  myButton = createButton("send your text");
  myButton.position(myInp.x, myInp.height + 30);
  myButton.mousePressed();

  //myText = "";
  //inputTxt = "";

  //-----------------------------------------
  // Thread - top horizontal
  for (let i = 0; i < colsThread; i++) {
    threads[i] = [];
    for (let j = 0; j < rowsThread; j++) {
      let x = i * w + bord;

      let y = j * h + bord * 3;

      threads[i][j] = new Draft(x, y, w, h, cl, "");
      threads[i][j].debugEnabled = debugMode;
    }
  }
  // Tiep Up - top right
  for (let i = 0; i < colsTieUp; i++) {
    tieUp[i] = [];
    for (let j = 0; j < rowsTieUp; j++) {
      let x = colsThread * w + bord + i * w + bord;
      let y = j * h + bord * 3;

      tieUp[i][j] = new Draft(x, y, w, h, cl, j);
      tieUp[i][j].debugEnabled = debugMode;
    }
  }

  // Pedals vertical grid - right side
  for (let i = 0; i < rowsThread; i++) {
    pedals[i] = [];
    for (let j = 0; j < colsThread; j++) {
      let x = colsThread * w + w + i * w + bord;
      let y = rowsThread * h + h + j * h + bord * 4;

      pedals[i][j] = new Draft(x, y, w, h, cl, i);
      pedals[i][j].debugEnabled = debugMode;
    }
  }

  // DrawDown - The large grid
  for (let i = 0; i < colsThread; i++) {
    drawDown[i] = [];
    for (let j = 0; j < colsThread; j++) {
      let x = i * w + bord;
      let y = rowsThread * h + h + j * h + bord * 4;

      drawDown[i][j] = new drawBack_Item(x, y, w, h, cl, j);
    }
  }

  //noLoop();
}

//------------------------------------------------------
//type ettiğimiz harfleri inputTxt ye atadım
function typing() {
  inputTxt = this.value();
  if (inputTxt.length > colsThread) {
    let diff = inputTxt.length - colsThread;
    inputTxt = inputTxt.slice(diff);
  }

  console.log(inputTxt);
  //console.log("you are typing: ", this.value());
}
//------------------------------------------------------
function tieUp_generator() {
  k = floor(random(0, tieUp_Data.length));
  for (let i = 0; i < tieUp_Data[k].length; i++) {
    for (let j = 0; j < tieUp_Data[k][i].length; j++) {
      tieUp[i][j].state = tieUp_Data[k][j][i];
      if (tieUp[i][j].state == 1) {
        tieUp[i][j].cl = "#000000";
      }
    }
  }
}
//------------------------------------------------------

function draw() {
  //background(settings.background);
  //background(220);
  //slider for background
  //let valBack = sliderBackgrnd.value();

  //shiftThreadVal--;
  //shiftPedalVal++;
  textAlign(LEFT);
  textSize(10);

  fill(0);
  text("Real-time: ", bord, rowsThread * h + colsThread * h + 70);
  text(myInp.value(), bord, rowsThread * h + colsThread * h + 80);
  text("warp", (colsThread * w) / 2 + bord, 20);
  text("tie-up", colsThread * w + bord * 3, 20);
  text("weft", colsThread * w + bord * 3, rowsTieUp * h + bord * 3 + 10);
  text("draw-down", (colsThread * w) / 2, rowsTieUp * h + bord * 3 + 10);
  text("text something", (colsThread + colsTieUp) * w + bord * 5, 20);
  //text(myText, 20, 300);

  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < rowsThread; j++) {
      threads[i][j].show();
    }
  }

  for (let i = 0; i < rowsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      pedals[i][j].show();
    }
  }

  for (let i = 0; i < colsTieUp; i++) {
    for (let j = 0; j < rowsTieUp; j++) {
      tieUp[i][j].show();
    }
  }

  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      drawDown[i][j].show();
    }
  }
}

//-----------------------------------------------------

function mousePressed() {
  tieUp_generator();
  getLetters(mouseX, mouseY);
}

function getLetters(mx, my) {
  // Thread interaction
  for (let i = 0; i < colsThread; i++) {
    let letter = inputTxt[i];
    let letterIndex = letters.indexOf(letter) % rowsTieUp;
    for (let j = 0; j < rowsThread; j++) {
      if (letterIndex != -1 && letterIndex == j) {
        // mirrored text right to left
        var currentId = shiftThreadVal - i - 1;

        if (currentId < 0) {
          let repNum = floor(colsThread / inputTxt.length); //pattern repetition number
          for (let k = 0; k < repNum; k++) {
            threads[colsThread + currentId - inputTxt.length * k][
              j
            ].setClicked();
          }
          // threads[colsThread + currentId][j].setClicked();
          // threads[colsThread + currentId - inputTxt.length][j].setClicked();
          // threads[colsThread + currentId - inputTxt.length * 2][j].setClicked();
        } else {
          //let currentId2 = currentId - inputTxt[i].length;
          threads[currentId][j].setClicked();

          // threads[currentId * inputTxt[i].length][j].setClicked();
        }
      }
    }
  }

  //mirrored letters pedal version - it works
  for (let j = 0; j < colsThread; j++) {
    let letter = inputTxt[j];
    let letterIndex = letters.indexOf(letter) % colsTieUp;

    for (let i = 0; i < rowsThread; i++) {
      if (letterIndex != -1 && letterIndex == i) {
        var currentId = j - shiftPedalVal;
        let _i = rowsThread - i - 1;
        if (currentId < 0) {
          pedals[_i][colsThread + currentId].setClicked();
        } else {
          // pedals[_i][currentId].setClicked();
          //pedals[_i][currentId + inputTxt.length].setClicked();
          let _repNum = floor(colsThread / inputTxt.length);
          for (let _k = 0; _k < _repNum; _k++) {
            pedals[_i][currentId + inputTxt.length * _k].setClicked();
          }
        }
      }
    }
  }

  //making green grid at tie up
  /* for (let i = 0; i < colsTieUp; i++) {
    for (let j = 0; j < rowsTieUp; j++) {
      if (tieUp[i][j].isClicked(mx, my)) {
        tieUp[i][j].getIsClicked();

        clearPatternOnDrawDown();

      }
    }
  }*/
  activeThreadsArr = activeThreads();
  activePedalsArr = activePedals();
  activeTieUpArr = activeTieUp();

  tieUp_generator();
  displayPatternOnDrawDown();
}

//------------------------------------------------------------------

//------------------------------------------------------------------
function displayPatternOnDrawDown() {
  for (let i = 0; i < rowsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      if (pedals[i][j].state == 1) {
        let pedal_i = i;
        let pedal_j = j;

        for (let j = 0; j < rowsTieUp; j++) {
          if (tieUp[pedal_i][j].state == 1) {
            //var tieUp_j = j;

            for (let i = 0; i < colsThread; i++) {
              if (threads[i][j].state == 1) {
                drawDown[i][pedal_j].showDisplay();
              } else {
                drawDown[pedal_i][j].hideDisplay();
                //console.log(i + ":" + pedal_j);
              }
            }
          }
        }
      }
    }
  }
}

function clearAllThreads() {
  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < rowsThread; j++) {
      threads[i][j].setUnclicked();
    }
  }
}

function clearAllPedals() {
  for (let i = 0; i < rowsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      pedals[i][j].setUnclicked();
    }
  }
}

function clearPatternOnDrawDown() {
  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      drawDown[i][j].hideDisplay();
    }
  }
}

//-----------------------------------------------------------------

//controls each column of thread if there is more than one active box,
//if there is, unclick others
function checkActiveThreadCol(col, row) {
  for (let i = 0; i < rowsThread; i++) {
    if (threads[col][i].state == 1) {
      threads[col][i].setUnclicked();
      //pedals[i][col].setUnclicked();
    }
  }

  threads[col][row].setClicked();
  return { i: col, j: row };
}
//controls each row of pedals if there is more than one active box,
//if there is, unclick others
function checkActivePedalCol(col, row) {
  for (let i = 0; i < rowsThread; i++) {
    if (pedals[i][row].state == 1) {
      pedals[i][row].setUnclicked();
    }
  }
  pedals[col][row].setClicked();
  return { i: col, j: row };
}

//-----------------------------------------------------

function activeThreads() {
  var arr = [];
  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < rowsThread; j++) {
      if (threads[i][j].state == 1) {
        arr.push({ i: i, j: j });
      }
    }
  }

  return arr;
}

function activePedals() {
  var arr = [];

  // Pedals vertical grid - right side
  for (let i = 0; i < rowsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      if (pedals[i][j].state == 1) {
        arr.push({ i: i, j: j });
      }
    }
  }
  return arr;
}

function activeTieUp() {
  var arr = [];
  //making green grid at tie up
  for (let i = 0; i < colsTieUp; i++) {
    for (let j = 0; j < rowsTieUp; j++) {
      if (tieUp[i][j].state == 1) {
        arr.push({ i: i, j: j });
      }
    }
  }
  return arr;
}

//------------------------------------------------------

function keyPressed() {
  if (key == "s") {
    save("yourPattern.jpg");
  }
}

function keyPressed() {
  if (key == "0") {
    clearCanvas();
  }
}
