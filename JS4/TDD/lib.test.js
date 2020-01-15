const lib = require('./lib');

describe('Tokenize', () => {
  it('should tokenize HELLO WORLD', () => {
    const result = lib.tokenize('hello world');
    expect(result).toEqual({HELLO: 1, WORLD: 1});
  });

  it('should tokenize LIKE (KOREAN)', () => {
    const result = lib.tokenize('I like (Korean)');
    expect(result).toEqual({LIKE: 1, '(KOREAN)': 1});
  });
  it('should return empty object', () => {
    const result = lib.tokenize('');
    expect(result).toEqual({});
  });

  it('should return empty object', () => {
    const result = lib.tokenize('');
    expect(result).toEqual({});
  });
});

describe('makeTrainingData', () => {
  it('should turn {} to empty array', () => {
    const result = lib.makeTrainingData({});
    expect(result).toEqual([]);
  });
  it('should turn 1 data to array of input/output', () => {
    const result = lib.makeTrainingData({
      'beef boneless 100': 'MEAT',
    });
    expect(result).toEqual([
      {
        input: {
          BEEF: 1,
          BONELESS: 1,
        },
        output: {
          MEAT: 1,
        },
      },
    ]);
  });
  it('should turn 2 data to array of input/output', () => {
    const result = lib.makeTrainingData({
      'beef boneless 100': 'MEAT',
      'pink apples': 'VEGGIE',
    });
    expect(result).toEqual([
      {
        input: {
          BEEF: 1,
          BONELESS: 1,
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

describe('Push All', () => {
  it ('Pushes nothing', () => {
    const data = {}
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({})
  })
  it ('Pushes Hello and array', () => {
    const data = {blah: [['hello']]}
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({
      blah: [['hello'], [9, 8, 7]]
    })
  })
  it ('Pushes blah and key2 in array', () => {
    const data = {blah: []}
    lib.pushAll(data, [9,8,7])
    expect(data).toEqual({
      blah: [[9, 8, 7]]
    })
  })
  it('should push array into object with 2 keys', () => {
    const data = {
      blah: [['hello']],
      key2: []
    }
    lib.pushAll(data, [9, 8, 7])
    expect(data).toEqual({
      blah: [['hello'], [9, 8, 7]],
      key2: [[9, 8, 7]]
    })
  })
})

describe('Get most likely', () => {
  it ('should return null', () => {
  const result = lib.getMostLikely({})
    expect(result).toEqual(null)
})

  it ('should return meat', () => {
  const result = lib.getMostLikely({
  meat: 0.987,
  veggie: 0.187,
  store: 0.287
  })
    expect(result).toEqual('meat')
  })

  it ('should return store', () => {
  const result = lib.getMostLikely({
  meat: 0.287,
  veggie: 0.187,
  store: 0.987
})
    expect(result).toEqual('store')
  })
// result3 is 'store'
})
