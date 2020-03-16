const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

const commas = obj => {
  return Object.values(obj).reduce((acc, curr) => {
    return (acc += curr + ', ');
  }, '');
};

const result = commas(info);
// result is 'arrogant, native, strong'
console.log(result)
