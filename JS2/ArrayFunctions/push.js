const apples = ["Fuji", "Gala"]
const trees = apples.push("Pink Lady")

const peaches = [4, 8, 12]
const plums = peaches
peaches.push(plums)

console.log('peaches', peaches) 
console.log('<ref *1> [ 4, 8, 12, [Circular *1] ]')
console.log(" ")

console.log('plums', plums)
console.log('<ref *1> [ 4, 8, 12, [Circular *1] ]')
console.log(" ")

plums[0] = 47
console.log('plums', plums)
console.log('<ref *1> [47, 8, 12, [Circular *1] ]')
console.log(" ")

peaches[3][1] = 39
console.log('peaches', peaches) 
console.log('<ref *1> [47, 39, 12, [ Circular * 1] ]')
console.log(" ")

let nectarines = [1,2,3]
nectarines = nectarines.push(6)

console.log('nect', nectarines)
console.log([1,2,3,6])
