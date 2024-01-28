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

class Draft2 {
  constructor(x2, y2, w2, h2, cl2, char2 = "0") {
    this.x2 = x2;
    this.y2 = y2;
    this.w2 = w2;
    this.h2 = h2;
    this.cl2 = cl2;
    this.activeColor2 = 255;
    this.char2 = char2;

    this.state2 = 0; //colorı control için yazdık

    // textAlign(CENTER, CENTER);
  }

  /*isClicked(px2, py2) {
    if (
      px2 > this.x2 &&
      px2 < this.x2 + this.w2 &&
      py2 > this.y2 &&
      py2 < this.y2 + this.h2
    ) {
      return this;
    } else {
      return false;
    }
  }*/

  setMotionClicked() {
    this.state2 = 1;
    this.activeColor2 = this.cl2;
  }

  /*getIsClicked() {
    return this.state2;
  }*/

  setMotionUnclicked() {
    this.state2 = 0;
    this.activeColor2 = 255;
  }

  /*clicked(px, py) {  //sketch 4 te kapattık
      let d = dist(px, py, this.x, this.y); 
      if (d < this.w && d < this.h) {
        this.cl = 255;
      } else {
        this.cl = 0;
    } 
  } */

  /*changeColor(bright) {
    this.cl = bright;
   } 
  
  
  /*contains(px,py) {
      let d = dist(px, py, this.x, this.y); 
      if (d < this.w && d < this.h) {
        //this.cl = 255;
        return true;
      } else {
        //this.cl = 0;
        return false;
      }
    }*/

  showMotion() {
    strokeWeight(2);
    fill(this.activeColor2);
    //rect(this.x, this.y, this.w, this.h);
    rect(this.x2, this.y2, this.w2, this.h2);
    fill(0);

    textSize(7);
    text(this.char2, this.x2 + this.w2 * 0.5, this.y2 + this.h2 * 0.5);
  }
  // text(this.abc_0, this.x + this.w * 0.5, this.y + this.h * 0.5);
  //text(this.abc_1, this.x + this.w * 0.5, this.y + this.h * 0.5);
}
