const keyOfLongestString = (obj, val='', res = '') => {
  const entries = Object.entries(obj);

  entries.forEach(e => {
    const [key, value] = e;
    if (value.length > val.length) {
      res = key;
      val = value
    }
  });
  return res;
};


const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

const result = keyOfLongestString(info); 
// result should be "ironman"
// because "arrogant" is longer than "naive" and "strong"
console.log(result, 'res')

const info2 = {
  a: 'xxxxxx',
  bc: 'xx',
  abc: 'xxx',
};

const result2 = keyOfLongestString(info2); 
// result2 should be "a"
// "xxxxxx" is longer than "xx" and "xxx"
console.log(result2, 'res 2')
