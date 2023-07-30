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
    //this.passiveColor = "#000000";
    //this.activeColor = "#ffffff";
    this.char = char;
    this.state = 0; //colorı control için yazdık

    textAlign(CENTER, CENTER);
  }

  //drawDown click için yazıldı
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
    strokeWeight(1);
    //fill(this.cl);
    //rect(this.x, this.y, this.w, this.h);
    fill(this.cl);
    rect(this.x, this.y, this.w, this.h);
    //fill(0);
    //kutuların içindeki rakamları kapattık
    /* textSize(7);
    text(this.char, this.x + this.w * 0.5, this.y + this.h * 0.5);*/
  }
}
