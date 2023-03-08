const {Rectangle, Circle, Triangle} = require("./shape.js");

describe('Rectangle', () => {
    test('rectangle render', () => {
    const shape= new Rectangle();
    var color = ('red')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="${color}"/>`)
});
});

describe('Circle', () => {
    test('circle render', () => {
    const shape= new Circle();
    var color = ('yellow')
    shape.setColor(color);
    expect(shape.render()).toEqual(`circle cx="150" cy="100" r="80" fill="${color}"/>`)
});
});

describe('Triangle', () => {
    test('Triangle render', () => {
    const shape= new Triangle();
    var color = ('yellow')
    shape.setColor(color);
    expect(shape.render()).toEqual(`polygon points="0,200 300,200 150,0" fill="${color}"/>`)
});
});