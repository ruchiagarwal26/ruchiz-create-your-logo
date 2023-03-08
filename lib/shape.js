class Shape {
    constructor(color) {
        this.color = color
          }      
}

class Rectangle extends Shape{
    render(){
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}"/>`
    }
}

class Circle extends Shape{
    render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}
    
class Triangle extends Shape{
    render(){
    return `polygon points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
}
  
module.exports = {Rectangle, Circle, Triangle};
