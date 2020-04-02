const delayBy = (time, verb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(verb)
    }, time)
  })
}

delayBy(500, "study").then((data) => {
  console.log(data)
  return delayBy(440, "sleep")
}).then((data) => {
  console.log(data)
  return delayBy(140, "dance")
}).then((data) => {
  console.log(data)
  return "eat"
}).then((data) => {
  console.log(data)
})
