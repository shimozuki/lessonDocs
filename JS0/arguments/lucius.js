const lucius = (dobby) => {
  return dobby + 2
}

let james = lucius(5)
console.log(james, 7)
james = lucius(5) === lucius(3) + 2
console.log(james, true)
