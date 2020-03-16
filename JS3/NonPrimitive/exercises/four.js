const abc = ["abc", "a", "abc", "b", "abc", "a", "b", "c", "abc"]

const countOccurances = (arr) => {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})
}

const result = countOccurances(abc)

console.log(result, 'result')
