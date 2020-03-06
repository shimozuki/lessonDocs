const keeper = () => {
  return 5
}

let snitch = keeper
console.log(snitch, '1')
snitch = !keeper
console.log(snitch, '2')
snitch = !keeper()
console.log(snitch, '3')
