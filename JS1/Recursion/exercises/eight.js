const fun1 = (x, b) => {
  if (x <= 0) {
    return
  }
  b()
  return fun1(x-1, b)
}

const nice = () => {
  console.log("nice")
}

console.log("print nice ten times")
console.log(fun1(10, nice), undefined)
