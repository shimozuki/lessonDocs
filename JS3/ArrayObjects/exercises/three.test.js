const fn = require('./three.js')

describe('tiredForEach function', () => {
  jest.useFakeTimers();
  it('should call callback immediately when not tired', () => {
    const callback = jest.fn();
    const arr = ['Edna', 'Optimus', 'Minion'];
    arr.tiredForEach(callback, 200);
    expect(callback).toHaveBeenCalled();
  });
  it('should not run function before time has passed', () => {
    const callback = jest.fn();
    const callback2 = jest.fn();
    const arr = ['Edna', 'Optimus', 'Minion'];
    arr.tiredForEach(callback, 200);
    arr.tiredForEach(callback2, 200);
    expect(callback2).not.toHaveBeenCalled();
  });
  it('should work again once time has passed', () => {
    const callback = jest.fn();
    const arr = ['Edna', 'Optimus', 'Minion'];
    arr.tiredForEach(callback, 200);
    jest.advanceTimersByTime(200);
    arr.tiredForEach(callback, 200);
    expect(callback).toHaveBeenCalledTimes(6);
  });
});
