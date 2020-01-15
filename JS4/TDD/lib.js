const lib = {}

const tokenize = (str='') => {
  const tokens = str.split(' ')
  return tokens.reduce((acc, e) => {
    const num = parseInt(e)
    if ((e.length > 2) && !Number.isInteger(num)) {
      acc[e.toUpperCase()] = 1
    }
      return acc
  }, {})
}

const makeTrainingData = (obj) => {
  return Object.entries(obj).map((data) => {
    const inputData = data[0]
    const result = data[1].toUpperCase()
    const output = {}
    output[result] = 1
    return {
      input: lib.tokenize(inputData),
      output: output
    }
  })
}

const pushAll = (mapping, data) => {
  Object.keys(mapping).forEach(e => {
    mapping[e].push([...data])
  })
}

const getMostLikely = (obj) => {
  return Object.entries(obj).reduce((ent, e) => {
    if (e[1] > ent[1]) {
      return e
    }
    return ent
  }, [null, 0])[0]
}

lib.tokenize = tokenize
lib.makeTrainingData = makeTrainingData
lib.pushAll = pushAll
lib.getMostLikely = getMostLikely

module.exports = lib 
