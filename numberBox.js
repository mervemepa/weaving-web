class numberBox {
  constructor(x, y, w, h, cl, char = "0") {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cl = cl;
    this.passiveColor = "#ffffff";
    this.activeColor = "#00ff00";
    this.char = char;
    this.state = 0; //colorı control için yazdık

    //textAlign(CENTER, CENTER);
  }

  show() {
    strokeWeight(2);
    fill(this.cl);
    fill(0);
  }
}
