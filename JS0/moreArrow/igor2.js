let people = ""
const igor = () => {
  people = people + " muggle "
  return people
}

const solution = () => {
  igor()
  igor()
  igor()
}

const luna = solution()
console.log(luna, undefined)
console.log(people, "muggle muggle muggle")
