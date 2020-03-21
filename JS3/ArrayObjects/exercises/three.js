const a = ["chinese", "african", "korean"]

const callback = (e, i) => {
  console.log(e + i)
}

Array.prototype.tiredForEach = function(fun, num) {
  this.num = num
}

a.tiredForEach(callback, 180)

a.tiredForEach(callback, 180)

a.tiredForEach(callback, 180)

