function Soilder(name, age) {
  this.age = age
  let life = 100

  this.getName = () => {
    return name
  }
  this.getLife = () => {
    return life
  }
  this.getHurt = () => {
    if (age > 25) {
      life = life - 10
    }
    life = life - 10
  }
}

const a = new Soilder("Bunny", 20)
const b = new Soilder("Scooby", 11)
const c = new Soilder("Tigger", 40)

console.log(a.age, 'a age')
console.log(b.age, 'b age')
console.log(c.age, 'c age')

console.log(a.getLife())

console.log(c.getName())

console.log(a.getHurt())
console.log(c.getHurt())

console.log(a.getLife())
console.log(b.getLife())
console.log(c.getLife())

