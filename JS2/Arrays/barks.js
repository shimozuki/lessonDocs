const barks = [[1,2,3], [2,3,4], [3,4,5]]
barks[2][1] = 10
//console.log(barks, 'barks')
//console.log([[1,2,3], [2,3,4], [3,10,5]])

barks[1][0] = barks[2][1]
//console.log(barks, 'barks')
//console.log([[1,2,3], [10,3,4], [3,10,5]])

barks[2] = () => {
  barks[0][1] = barks[0][1] + barks[0][0]
}

//console.log(barks, 'barks')
//console.log([1,2,3],[10,3,4], '[Function (anonymous)]')

barks[2]()
barks[1] = barks[2]()

console.log(barks, 'barks')
console.log([[1,4,3], undefined,'[Function (anonymous)]'])

