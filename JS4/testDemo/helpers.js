const allFuns = {}

const sumAll = (arr, i=0, sum=0) => {
  if (arr.length < 1) return arr
  if (!arr[i]) {sum += 0}
  if (i === arr.length) return sum
  sum += arr[i]
  return sumAll(arr, i+1, sum)
}

allFuns.sumAll = sumAll 
module.exports = allFuns 
