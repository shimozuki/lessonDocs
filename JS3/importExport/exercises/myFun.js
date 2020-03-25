module.exports = (obj) => {
  if (obj) {
    const entries = Object.entries(obj)
    entries.forEach((e) => {
      console.log(e[0], 'key', e[1], 'value')
    })
  } else {
  console.log('This is a function');
  }
};
