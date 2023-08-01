function initGUI() {
  var button_change = createButton("change tie-up"); //button for changing tie-up
  button_change.size(150);
  button_change.mousePressed(button_change_handler);
  button_change.parent("change_tie-up");
  button_change.style("background-color", "#AAAAAA");
  button_change.style("font-family", "system-ui");

  var cleanButton = createButton("clean"); //button for cleaning canvas and text
  cleanButton.size(150);
  cleanButton.style("font-family", "system-ui");
  cleanButton.parent("clean");
  cleanButton.style("background-color", "#AAAAAA");
  cleanButton.mousePressed(cleanFull);

  var picButton = createButton("save as .jpg"); //button for save canvas as .jpg
  picButton.size(150);
  picButton.style("font-family", "system-ui");
  picButton.parent("send");
  picButton.style("background-color", "#AAAAAA");
  picButton.mousePressed(saveJpg); //hep bir sonrakini save ediyo
}

//------------------------------------------------------
function button_change_handler() {
  clearCanvas();
}

function clearCanvas() {
  //clear threads
  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < rowsThread; j++) {
      threads[i][j].setUnclicked();
    }
  }

  //clear pedals
  for (let i = 0; i < colsTieUp; i++) {
    for (let j = 0; j < colsThread; j++) {
      if (pedals[i][j].state == 1) {
        pedals[i][j].setUnclicked();
      }
    }
  }
  //clear TieUp
  for (let i = 0; i < colsTieUp; i++) {
    for (let j = 0; j < rowsTieUp; j++) {
      tieUp[i][j].setUnclicked();
    }
  }

  //clear drawDown
  for (let i = 0; i < colsThread; i++) {
    for (let j = 0; j < colsThread; j++) {
      drawDown[i][j].setUnclicked();
    }
  }
}

function clearText() {
  inputTxt = "";
  myInp.value("");
}

function cleanFull() {
  clearCanvas();
  clearText();
}

function saveJpg() {
  save("yourPattern.jpg");
}
