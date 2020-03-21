const fn = require('./two.js');

describe('setMaxSize prototype', () => {
  it('maxSize should stay four', () => {
    const arr = ['Micahelangelo', 'Leonardo', 'Raphael'];
    arr.setMaxSize(4);
    arr.push('Donatello')
    arr.setMaxSize(3)
    arr.push('Shredder');
    arr.setMaxSize(1)
    arr.push('Splinter')
    console.log('arr', arr)
    expect(arr.length).toEqual(4)
  });
});
