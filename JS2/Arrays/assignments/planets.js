const planets = ["Morag", "Aakon", "Xandar"]
const worlds = planets

worlds[2] = planets

console.log(worlds, 'worlds')
console.log(["Morage", "Aakon", ["Morag", "Aakon", "Xandar"]])

worlds[2][1] = "Ego"

console.log(worlds, 'worlds')
console.log(["Morage", "Aakon", ["Morag", "Ego", "Xandar"]])
