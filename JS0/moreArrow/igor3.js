let people = ""
const igor = () => {
  return () => {
    people = people + " muggle "
    return people
  }
}

const luna = igor()
let lovegood = luna()
console.log(lovegood, 'muggle')
lovegood = luna()
console.log(lovegood, 'muggle muggle')

console.log(luna, '[Function: (anonymous)]')

