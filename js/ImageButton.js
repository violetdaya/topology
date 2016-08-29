
function ImageButton(x,y,radius,backColor,activeColor,img,text,data){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.backColor = backColor;
  this.activeColor = activeColor;
  this.img = img;
  this.text = text || '';
  this.data = data;
  this.isActive = false;
}

ImageButton.prototype.draw = function(context){

  context.fillStyle = this.activeColor;

  context.beginPath();
  context.arc(this.x,this.y,this.radius+this.radius/3,0,Math.PI*2,false);
  context.arc(this.x,this.y,this.radius-this.radius/3,0,Math.PI*2,true);
  context.fill();

  context.fillStyle = this.backColor;

  context.beginPath();
  context.arc(this.x,this.y,this.radius,Math.PI*2,false);
  context.fill();

  context.drawImage(this.img,this.x-this.img.width/2,this.y-this.img.height/2);
}
