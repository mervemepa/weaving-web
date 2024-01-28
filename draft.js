class Draft {
  constructor(x, y, w, h, cl, char = "0") {
    //constructor(x, y, w, h, value, char = "0") {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cl = cl;
    //this.value = value;
    //this.letter = letter;
    this.passiveColor = "#ffffff";
    this.activeColor = "#000000";
    //this.passiveColor = "#29220A";
    //this.activeColor = "#ffffff";
    this.char = char;
    this.state = 0; //for color control
    this.debugEnabled = 0;
    //noStroke();
    textAlign(CENTER, CENTER);
    //ellipseMode(CORNER);
  }

  isClicked(px, py) {
    if (
      px > this.x &&
      px < this.x + this.w &&
      py > this.y &&
      py < this.y + this.h
    ) {
      return this;
    } else {
      return false;
    }
  }

  setClicked() {
    this.cl = this.activeColor;
    this.state = 1;
  }

  getIsClicked() {
    if (this.state == 1) {
      this.setUnclicked();
    } else if (this.state === 0) {
      this.cl = this.activeColor;
      this.state = 1;
    }
  }

  setUnclicked() {
    this.cl = this.passiveColor;
    this.state = 0;
  }

  showTieUp() {
    this.cl = this.activeColor;
  }

  show() {
    noStroke();
    //strokeWeight(0.5);
    //fill(0);
    //rect(this.x, this.y, this.w, this.h);
    //fill(this.cl);
    fill(this.cl);

    rect(this.x, this.y, this.w - 2.5, this.h - 2.5);
    //ellipse(this.x, this.y, this.w, this.h);
    //fill(0);
    //kutuların içindeki rakamları kapattık
    /* */
    if (this.debugEnabled == 1) {
      //fill(0);
      textSize(7);
      text(this.char, this.x + this.w * 0.5, this.y + this.h * 0.5);
    }
  }
}
