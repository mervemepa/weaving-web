window.mobileCheck = function () {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

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
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
let bord; //bordures between bars
let w; //each little box width
let h; //each little box height
let cl; //color of empty boxes
//-------------------------------------------

let button_change; //change tieUp model

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
//var myButton; //button for entering text
var myInp; //text input inside bar
//let sliderBackgrnd;
//--------------------------------------------
let tieUpDataBase; //json file for tie up pattern types
let tieUp_Data;
let tieup_Data_src;

const canvasWidth = mobileCheck() ? 355 : 640;
const canvasHeight = mobileCheck() ? 333 : 600;
const buttonHeight = mobileCheck() ? 40 : 20;

//assets
function preload() {
  settings = loadJSON("assets/settings.json");
  tieup_Data_src = loadJSON("assets/tieUpDataBase.json");
}

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  settings.colsThread = mobileCheck() ? 53 : settings.colsThread;

  canvas.parent("main"); //display canvas centering on html
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
  myInp = createInput("Text something here!");
  //myInp.position(colsThread * w + bord + colsTieUp * w + bord + 320, 93);
  // myInp.position(610, colsThread * w + bord + colsTieUp * w + bord * 15);
  myInp.size(canvasWidth);
  myInp.style("font-size", "13px");
  myInp.style("font-family", "system-ui"); // Font family
  myInp.input(typing); //typing fonksiyonu tanımladım aşağıda
  myInp.parent("myInpText"); //centering on html

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
  textAlign(LEFT);
  textSize(9);
  fill(255);

  //text("Real-time: ", bord, rowsThread * h + colsThread * h + 70);
  text(myInp.value(), bord, rowsThread * h + colsThread * h + 80);
  //fill("#FFFFFF");
  textFont("system-ui");
  text("warp", (colsThread * w) / 2 + bord * 2, 10);
  text("tie-up", colsThread * w + bord * 2 - 2, 10);
  text("weft", colsThread * w + bord * 2 + 3, rowsTieUp * h + bord * 3 + 5);
  text("draw-down", (colsThread * w) / 2, rowsTieUp * h + bord * 3 + 5);

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
          threads[colsThread + currentId][j].setClicked();
          let repNum = floor(colsThread / inputTxt.length); //pattern repetition number
          for (let k = 0; k < repNum; k++) {
            threads[colsThread + currentId - inputTxt.length * k][
              j
            ].setClicked();
          }
        } else {
          threads[currentId][j].setClicked();
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

/*function keyPressed() {
  if (key == "0") {
    clearCanvas();
    clearText();
  }
  if (key == "1") {
    save("yourPattern.jpg");
  }
}*/
