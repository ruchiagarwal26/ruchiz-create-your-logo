const {Rectangle, Circle, Triangle} = require("./lib/shape.js");

function generatesvg(userResponse) {
    
    var color = `${userResponse.shapeColor}`
    var shape
    if (userResponse.shapeLogo=="Rectangle"){
         shape = new Rectangle(color) }
    else if (userResponse.shapeLogo=="Circle"){
        shape = new Circle(color)
    }
    else if (userResponse.shapeLogo=="Triangle"){
        shape = new Triangle(color)
        }
    shape.setColor(color);    
    return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     ${shape.render()}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userResponse.textColor}">${userResponse.text}</text>

    </svg>
     `;
  }
  
  module.exports = generatesvg;