const pushAll = (obj, arr, i = 0) => {
  const entries = Object.entries(obj)
  if (i === arr.length) return
  console.log('e', entries)
  return pushAll(obj, arr, i+1) 
}

const data1 = { blah: [['hello']] }
const data2 = { blah: [] }
const data3 = {
  blah: [['hello']],
  key2: []
}

//console.log(pushAll({}, [9, 8, 7]))
console.log(pushAll(data1, [9, 8, 7]))
console.log(pushAll(data2, [9, 8, 7]))
console.log(pushAll(data3, [9, 8, 7]))

