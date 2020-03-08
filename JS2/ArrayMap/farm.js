const farm = ["sheep", "cow", "pig"]
const farm2 = [...farm]
const farm3 = ["horse", "duck", "llama"]
const farm4 = [...farm, ...farm2, ...farm3]

console.log('farm', farm)
console.log('farm2', farm2)
console.log('farm3', farm3)
console.log('farm4', farm4)

