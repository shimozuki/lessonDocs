const lib = require('./lib')

describe('hash table', () => {
  it('should hash hello and world', () => {
    const obj1 = lib.tokenize('hello world');
    expect(obj1).toEqual({HELLO: 1, WORLD: 1});
  });

  it('Should hash values', () => {
    const obj2 = lib.tokenize('I like (Korean)');
    expect(obj2).toEqual({LIKE: 1, '(KOREAN)': 1});
  });

  it('return empty object', () => {
    const obj3 = lib.tokenize('');
    expect(obj3).toEqual({});
  });

  it('return empty object', () => {
    const obj4 = lib.tokenize('00');
    expect(obj4).toEqual({});
  });
});
