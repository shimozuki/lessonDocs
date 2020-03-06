const solution = (a, b) => {
  return (c) => {
    return a + b + c
  }
}

const fun1 = solution(1,2)
console.log(fun1, '[Function: (anonymous)]')

let res = fun1(3)
console.log(res, 6)

res = fun1(5)
console.log(res, 8)

res = solution(2,3)(9)
console.log(res, 14)
