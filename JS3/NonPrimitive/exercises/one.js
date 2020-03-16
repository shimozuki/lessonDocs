const addKV = (obj, str1, str2) => {
  obj[str1] = str2
  return obj
}

console.log(addKV({}, "nice", "cool"))
