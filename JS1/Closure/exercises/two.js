const helloFunction = () => {
  let res = ""
  return () => {
    res += "hello"
    return res 
  }
}

const moreHello = helloFunction() 

let b = moreHello()
console.log(b, "hello")

b = moreHello()
console.log(b, "hellohello")

b = moreHello()
console.log(b, "hellohellohello")

b = moreHello()
console.log(b, "hellohellohellohello")

