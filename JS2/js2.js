const peppers = [5, 6, 6].map((element, index) => {
  setTimeout(() => {
    console.log(element)
    return 100
  }, 1000)
})

const friends = ["Tony Stark", "Vision", "Ultron"].reduce((a,b) => {
  setTimeout(() => {
    console.log("Greetings,", b)
  }, 2000)
  return a + b
}, "")
