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
