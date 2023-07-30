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
    //fill(this.cl);
    //rect(this.x, this.y, this.w, this.h);
    fill(this.cl);
    // rect(this.x, this.y, this.w, this.h);
    fill(0);
    //threads ve pedalsın colon sayılarını kapattık
    /*textSize(7);
    text(this.char, this.x + this.w * 0.5, this.y + this.h * 0.5);*/
  }
}
