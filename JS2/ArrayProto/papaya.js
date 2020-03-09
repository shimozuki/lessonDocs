Array.prototype.papaya = function(i=0, z=0) {
  if (i === this.length) return z
  return this.papaya(i+1, this[i] + z)
}

const juicy = [7,8,2].papaya

console.log(juicy, 'juicy')
console.log(['Function: (anonymous)'])

const juicy2 = [7,8,2].papaya()

console.log(juicy2, 'juicy2')
console.log(17)
