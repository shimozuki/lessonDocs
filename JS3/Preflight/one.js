const mergeArray = (arr1, arr2, res=[]) => {
  return [...arr1, ...arr2]
}

console.log(mergeArray(["Rattata", "Raticate"], ["Bulbasaur", "Ivysaur"]))
