const fruits = ["Banana", "Orange", "Apple", "Mango"]

fruits.splice(2, 1, "lemon", "Kiwi")

console.log('fruits', fruits)
console.log(["Banana", "Orange", "lemon", "Kiwi", "Mango"])
console.log(" ")

fruits.splice(2, 2)
console.log('fruits', fruits)
console.log(["Banana", "Orange", "Mango"])
console.log(" ")

fruits.splice(0, 1, "Apple", "Mango", "Pear")
console.log('fruits', fruits)
console.log(["Apple", "Mango", "Pear", "Orange", "Mango"])
