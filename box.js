class Box{
constructor(x, y, width, height){
    var box_option ={
        isStatic:true
        
        
          }
          this.body = Bodies.rectangle(x, y, width, height, box_option)
          this.width = width
          this.height = height
          World.add(myWorld, this.body)
}
display(){
    rectMode(CENTER)
    rect(this.body.position.x, this.body.position.y, this.width, this.height)


}

}