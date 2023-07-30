function initGUI() {
  var button_clean = createButton("change tie-up");
  button_clean.mousePressed(button_clean_handler);
  button_clean.parent("change_tie-up");
  button_clean.style("background-color", "#16F60A");
  //button_clean.position(
  colsThread * w + bord + colsTieUp * w + bord + 320, 200;
  // );
  //button_clean.position(
  170, colsThread * w + bord + colsTieUp * w + bord * 3 + 30;
  // );
}

//------------------------------------------------------
function button_clean_handler() {
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
