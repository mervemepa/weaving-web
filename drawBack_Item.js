//class for drawDown pattern - middle square

class drawBack_Item {
  constructor(x, y, w, h, cl, char = "0") {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cl = cl;
    this.passiveColor = "#ffffff";
    this.activeColor = "#000000";
    this.char = char;
    this.state = 0; //color control

    textAlign(CENTER, CENTER);
  }

  //drawDown click
  showDisplay() {
    this.cl = this.activeColor;
    this.state = 1;
  }

  hideDisplay() {
    this.cl = this.passiveColor;
    this.state = 0;
  }

  setUnclicked() {
    this.cl = this.passiveColor;
    this.state = 0;
  }

  show() {
    noStroke();
    fill(this.cl);
    rect(this.x, this.y, this.w - 2.5, this.h - 2.5);
  }
}
