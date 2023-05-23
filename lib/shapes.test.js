//Test for triangle -- TODO correct?
const Triangle = require('./triangle.js')
const Square = require('./square.js')
const Circle = require('./circle.js')

describe('triangle', () => {
    test('should return a triangle SVG', () => {
      const shape = new Triangle("JDH", "blue", "green");
      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 180" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">JDH</text></svg>`);
    });
  });

  describe('square', () => {
    test('should return a square SVG', () => {
      const shape = new Square("JDH", "blue", "green");
      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="10" width="200" height="200" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">JDH</text></svg>`);
    });
  });

  describe('circle', () => {
    test('should return a circle SVG', () => {
      const shape = new Circle("JDH", "blue", "green");
      expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">JDH</text></svg>`);
    });
  });