const removeLongestString = (obj, longest='', res='') => {
  const entries = Object.entries(obj)

  entries.forEach((e) => {
    const [key, value] = e
    if (value.length > longest.length) {
      longest = value
      res = key
    }
  })

  console.log(longest, 'longest')
  console.log(res, 'res')

  delete obj[res]

  return obj
}

const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

const result = removeLongestString(info);
// info is changed to:
// {spiderman: "naive", hulk: "strong"}
console.log(result, 'result')
