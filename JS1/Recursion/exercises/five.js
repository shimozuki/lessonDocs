const numberedHello = (num, i=0, res="") => {
  if (num <= 0) return ""
  if (i === num) return res
  return numberedHello(num, i+1, res + "hello")
}

const a = numberedHello(5)
const b = numberedHello(0)
const c = numberedHello(-4)

console.log(a)
console.log(b)
console.log(c)
