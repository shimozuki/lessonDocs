const remember = (events) => {
  if (events > 5) {
    return "well done"
  } 
  return "fail"
}

let result = remember(0)
console.log(result, "fail")
result = remember(20)
console.log(result, "well done")
