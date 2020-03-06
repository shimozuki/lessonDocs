const two = () => {
  console.log("two")
}

const three = () => {
  console.log("three")
}

const four = () => {
  console.log("four")
}

const five = () => {
  console.log("five")
}

const oneAndTwo = () => {
  setTimeout(() => {
    console.log("one")
    setTimeout(two, 2000)
    setTimeout(three, 3000)
    setTimeout(four, 4000)
    setTimeout(five, 5000)
  }, 1000)
}

console.log(oneAndTwo())
