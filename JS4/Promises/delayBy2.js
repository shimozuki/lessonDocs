const delayBy = (time, verb) => {
  return new Promise((resolve, reject) => {
    if (time < 50) {
      return reject('time too small')
    }
    setTimeout(() => {
      resolve(verb)
    }, time)
  })
}

delayBy(49).catch((data) => {
  console.log(data)
})
