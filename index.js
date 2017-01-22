function Point(x, y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`
}

function Shape(){
}

Shape.prototype.addToPlane = function(x, y){
  this.position = new Point(x, y)
}

Shape.prototype.move = function(x, y){
  this.position = new Point(x, y)
}

function Circle(radius){
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area = function(){
	return (Math.PI * this.radius^2)
}
Circle.prototype.circumference = function(){
  return (2 * Math.PI * this.radius)
}
Circle.prototype.diameter = function(){
  return 2*this.radius
}

function Side(length){
  this.length = length
}

function Polygon(sidesArray){
  this.sides = sidesArray
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon
Polygon.prototype.perimeter = function(){
  let perimeter = 0
  for (var i = 0; i < this.sides.length; i++){
    perimeter += this.sides[i].length
  }
  return perimeter
}
Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

function Quadrilateral(oneL, twoL, threeL, fourL){
  Polygon.call(this, [new Side(oneL), new Side(twoL), new Side(threeL), new Side(fourL)])
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Triangle(one, two, three){
  Polygon.call(this, [new Side(one), new Side(two), new Side(three)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

function Rectangle(w, h){
  this.width = w
  this.height = h
  Quadrilateral.call(this, w, h, w, h)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle
Rectangle.prototype.area = function(){
  return this.width * this.height
}

function Square(length){
  this.length = length
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square
Square.prototype.listProperties = function(){
  let string = ""
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      string += prop
    }
  }
  return string
}
