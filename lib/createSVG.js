const { Circle, Square, Triangle, Text } = require("./shapes");

//  create a shape and set the shapeColor and return the shape
function createShape(data) {
  let shape = null;
   
  switch (data.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    default:
      shape = new Circle();
  }

  shape.setColor(data.shapeColor);
  return shape.render();
}

// create text, set its color and return the text
function createText(data) {
  const text = new Text();
  text.setText(data.text);
  text.setColor(data.textColor);
  return text.render();
}

function createSVG(data) {
  let svgData = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${createShape(data)}
    ${createText(data)}
</svg>`;
  return svgData;
}

module.exports = createSVG;