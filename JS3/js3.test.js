const fn = require('./js3.js');

describe('zeroSquare function', () => {
  it('should create a 1x1 array of zeroes', () => {
    const square1 = [[0]];
    expect(fn.zeroSquare(1)).toEqual(square1);
  });
  it('should create a 1x1 array of zeroes', () => {
    const square2 = [
      [0, 0],
      [0, 0],
    ];
    expect(fn.zeroSquare(2)).toEqual(square2);
  });
  it('should create a 1x1 array of zeroes', () => {
    const square3 = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(fn.zeroSquare(3)).toEqual(square3);
  });
  it('should return an empty array for 0 value', () => {
    expect(fn.zeroSquare(0)).toEqual([]);
  });
});
