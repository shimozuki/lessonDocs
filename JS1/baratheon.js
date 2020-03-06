const baratheon = (run_me) => {
  return run_me() + 5
}

const tyrell = () => {
  return 10
}

let res = tyrell
console.log(res, '[Function: tyrell]')

res = baratheon(tyrell)
console.log(res, 15)

res = baratheon(() => {
  const b = 95
  tyrell()
})

console.log(res, NaN)

