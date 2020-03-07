const states = ["Delaware", "Missouri", "Hawaii"]
const firstState = states.shift()

console.log(states, 'states')
console.log(["Missouri", "Hawaii"])

console.log(firstState, 'Delaware')
console.log(" ")

const nuts = ["almond", "pistachio", "hazelnut"]
const seeds = nuts
const drupe = nuts.shift()

console.log(nuts, ["pistachio", "hazelnut"])
console.log(seeds, ["pistachio", "hazelnut"])
console.log(drupe, "almond")
console.log(" ")

