const fizzbuzz = (num, i=1) => {
  if (i > num) return num
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("fizz")
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("buzz")
  } else if (i % 3 == 0 && i % 5 === 0) {
    console.log("fizzbuzz")
  } else {
    console.log(i)
  }
  return fizzbuzz(num, i+1)
}

fizzbuzz(16)
