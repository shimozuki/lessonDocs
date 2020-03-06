const lessThan = (num1) => {
  return (num2) => {
    return num1 > num2
  }
}

const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26)
let nick = youngerThanCardiB(36)

const smallerThan = lessThan(2)
let b = smallerThan(3)
b = smallerThan(5) || youngerThanCardiB(5)
console.log(b, true)

