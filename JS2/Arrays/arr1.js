const trees = ["pine", 4, "apple", 6, false, ()=>{}]
let res = trees[0]

trees[4] = trees[0] + trees[2]
console.log(trees) 
console.log(["pine", 4, "apple", 6, "pineapple", ()=>{}])
console.log(" ")

trees[5] = trees[1] + trees[3]
console.log(trees)
console.log(["pine", 4, "apple", 6, "pineapple", 10])
console.log(" ")

res = trees.length
