const guardians = ["Rocket", 2, "Drax"]
const milano = guardians
//milano[1] = "Gamora"
milano[milano[1]] = "Quill"
//milano[milano[milano[1]]] = "Groot"
//milano[milano[milano[milano[1]]]] = "Drax"

console.log(guardians, 'guardians')
console.log(["Rocket", 2, "Quill"])
console.log(" ")
console.log(milano, 'milano')
console.log(["Rocket", 2, 'Quill'])
