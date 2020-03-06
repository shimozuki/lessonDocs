let points = 3
const charlie = (arthur, percy) => {
  points = points + 1
  if (arthur > percy) {
    return points
  }
  return 0 
}

const hedwig = charlie(4, 5) || charlie(9, 2)
console.log(hedwig, 5)
const nick = charlie(9, 2)
console.log(nick, 6)
