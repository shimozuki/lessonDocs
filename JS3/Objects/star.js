const star = { name: "Tarzan" }
const star2 = star
star2['friend'] = star
star2['friend']['lover'] = "Jane"


console.log('star 2', star2)
console.log({ name: "Tarzan", friend: '[Circular * 1]', lover: "Jane"})

star['name'] = "Sarah"

console.log('star', star)
console.log({ name: "Sarah", friend: '[Circular * 1]', lover: "Jane"})
console.log(" ")

const allStars = [star, star2]
allStars[0]['lover'] = allStars[1]['name']

console.log(star, 'star')
console.log(star2, 'star 2')
console.log(allStars, 'allStars')

