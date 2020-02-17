const lib = {};

const tokenize = (string, arr = string.split(' ')) => {
  return arr.reduce((acc, curr) => {
    curr = curr.toUpperCase();
    //console.log('current', curr)
    if (curr.length > 2) {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }
    return acc
  }, {});
};

const pushAll = ()

lib.tokenize = tokenize;

module.exports = lib
