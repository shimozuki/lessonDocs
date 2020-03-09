const firstLongerThan = (arr, num, i=0) => {
  if (i === arr.length) { 
    return 0
  }

  if (arr[i].length > num) {
    return arr[i]
  }
  return firstLongerThan(arr, num, i+1)
}

const a = firstLongerThan(["Ekans", "Arbok", "Pikachu", "Raichu"], 5)

console.log(a, 'a')
