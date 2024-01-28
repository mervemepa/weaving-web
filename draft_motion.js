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
    //textAlign(CENTER, CENTER);
  }

  isMotionClicked(px2, py2) {
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
  }

  setMotionClicked() {
    this.state2 = 1;
    this.activeColor2 = this.cl2;
  }

  getMotionIsClicked() {
    return this.state2;
  }

  setMotionUnclicked() {
    this.state2 = 0;
    this.activeColor2 = 255;
  }

  motionClicked(px, py) {
    //sketch 4 te kapattık
    let d = dist(px, py, this.x, this.y);
    if (d < this.w && d < this.h) {
      this.cl = 255;
    } else {
      this.cl = 0;
    }
  }

  /*changeColor(bright) {
    this.cl = bright;
   } 
  */

  motionContains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.w && d < this.h) {
      //this.cl = 255;
      return true;
    } else {
      //this.cl = 0;
      return false;
    }
  }

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
