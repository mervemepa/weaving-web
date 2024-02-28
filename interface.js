function initGUI() {
  var button_change = createButton("change tie-up"); //button for changing tie-up
  button_change.size(canvasWidth / 5, buttonHeight);
  button_change.mousePressed(button_change_handler);
  button_change.parent("change_tie-up");
  button_change.style("background-color", "#808080");
  button_change.style("color", "#000000");
  button_change.style("font-family", "system-ui");
  button_change.style("box-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)");

  var cleanButton = createButton("clean text"); //button for cleaning canvas and text
  cleanButton.size(canvasWidth / 5, buttonHeight);
  cleanButton.style("font-family", "system-ui");
  cleanButton.parent("clean");
  cleanButton.style("background-color", "#808080");
  cleanButton.style("color", "#000000");
  cleanButton.style("box-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)");
  cleanButton.mousePressed(cleanFull);

  var picButton = createButton("save as .jpg"); //button for save canvas as .jpg
  picButton.size(canvasWidth / 5, buttonHeight);
  picButton.style("font-family", "system-ui");
  picButton.parent("jpg");
  picButton.style("background-color", "#808080");
  picButton.style("color", "#000000");
  picButton.style("box-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)");
  picButton.mousePressed(saveJpg);

  var myButton = createButton("weave your text"); //submit button
  myButton.size(canvasWidth / 5, buttonHeight);
  myButton.style("font-family", "system-ui");
  myButton.parent("send");
  myButton.style("background-color", "#808080");
  myButton.style("box-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)");
  myButton.style("color", "#000000");
  //myButton.mousePressed();

  var randomButton = createButton("word index"); //submit button
  randomButton.size(canvasWidth / 5, buttonHeight);
  randomButton.style("font-family", "system-ui");
  randomButton.parent("randombutton");
  randomButton.style("background-color", "#808080");
  randomButton.style("color", "#000000");
  randomButton.style("box-shadow", "2px 2px 4px rgba(0, 0, 0, 0.2)");
  randomButton.mousePressed(random_word_handler);
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

//cleans the text on input box
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
