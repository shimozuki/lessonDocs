const arr = ["<button name='submit'></button>", "<div></div>"]

Array.prototype.pad = function(num, ele, i=0) {
  if (i === num) return this
  this.push(ele)
  return this.pad(num, ele, i+1)
}

const a = arr.pad(2, "<br/>")

console.log(a, 'a')
