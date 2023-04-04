class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_image=loadImage("assets/canon.png")
    this.canon_base=loadImage("assets/cannonBase.png")
  }
  display(){
  push ()
  translate(this.x,this.y)
  rotate (this.angle)
  imageMode (CENTER)
  image(this.canon_image,0,0,this.width,this.height)
  pop ()
  image(this.canon_base,70,20,200,200)
  }
    
  }
  

