const neville = (long, bottom) => {
  if (long > bottom) {
    long = long + 3
  }
  return long
}

let hermione = neville(4, 5)
console.log(hermione, 4)
hermione = neville(9, 2)
console.log(hermione, 12)
