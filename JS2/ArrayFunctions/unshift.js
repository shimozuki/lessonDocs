const nuts = ["almond", "pistachio", "hazelnut"]
const seeds = nuts
nuts.unshift(seeds)

console.log(nuts) 
console.log('[[Circular*1], "almond", "pistachio", "hazelnut"]')
