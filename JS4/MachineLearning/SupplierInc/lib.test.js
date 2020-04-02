// lib.test.js
const lib = require('./lib.js');

describe('tokenize', () => {
  it('should tokenize "hello world 2000"', () => {
    const obj = lib.tokenize('hello world');
    expect(obj).toEqual({HELLO: 1, WORLD: 1});
  });
  it('should tokenize "I like (Korean)"', () => {
    const obj = lib.tokenize('I like (Korean)');
    expect(obj).toEqual({LIKE: 1, '(KOREAN)': 1});
  });
  it('should tokenize ""', () => {
    const obj = lib.tokenize('');
    expect(obj).toEqual({});
  });
  it('should tokenize "00" to be empty array', () => {
    const obj = lib.tokenize('00');
    expect(obj).toEqual({});
  });
});

describe('makeTrainingData', () => {
  it('should turn {} to empty array', () => {
    const result = lib.makeTrainingData({});
    expect(result).toEqual([]);
  });
  it('should turn 1 data to array of input/output', () => {
    const result = lib.makeTrainingData({
      'hello world 2000': 'MEAT',
    });
    expect(result).toEqual([
      {
        input: {
          HELLO: 1,
          WORLD: 1,
        },
        output: {
          MEAT: 1,
        },
      },
    ]);
  });
  it('should turn 2 data to array of input/output', () => {
    const result = lib.makeTrainingData({
      'hello world 2000': 'MEAT',
      'pink apples': 'VEGGIE',
    });
    expect(result).toEqual([
      {
        input: {
          HELLO: 1,
          WORLD: 1,
        },
        output: {
          MEAT: 1,
        },
      },
      {
        input: {
          PINK: 1,
          APPLES: 1,
        },
        output: {
          VEGGIE: 1,
        },
      },
    ]);
  });
});

describe('pushAll', () => {
  it('should not push array into {}', () => {
    const data = {};
    lib.pushAll(data, [9, 8, 7]);
    expect(data).toEqual({});
  });
  it('should push array into object with 1 key, non-empty array', () => {
    const data = {blah: [['hello']]};
    lib.pushAll(data, [9, 8, 7]);
    expect(data).toEqual({
      blah: [['hello'], [9, 8, 7]],
    });
  });
  it('should push array into object with 1 key, empty array', () => {
    const data = {blah: []};
    lib.pushAll(data, [9, 8, 7]);
    expect(data).toEqual({
      blah: [[9, 8, 7]],
    });
  });
  it('should push array into object with 2 keys with different array values', () => {
    const data = {
      blah: [['hello']],
      key2: [],
    };
    lib.pushAll(data, [9, 8, 7]);
    expect(data).toEqual({
      blah: [['hello'], [9, 8, 7]],
      key2: [[9, 8, 7]],
    });
  });
});

describe('getMostLikely', () => {
  it('should return null if {}', () => {
    const result = lib.getMostLikely({});
    expect(result).toEqual(null);
  });
  it('should return first key', () => {
    const result = lib.getMostLikely({
      meat: 0.987,
      veggie: 0.187,
      store: 0.287,
    });
    expect(result).toEqual('meat');
  });
  it('should return last key', () => {
    const result = lib.getMostLikely({
      meat: 0.287,
      veggie: 0.187,
      store: 0.987,
    });
    expect(result).toEqual('store');
  });
});
