const xlsx = require('xlsx')

const tokenize = str => {
  const tokens = str.split(' ')
  return tokens.reduce((acc, e) => {
    const num = parseInt(e)
    if (e.length > 2 && !Number.isInteger(num)) {
      acc[e.toUpperCase()] = 1
    }
      return acc
  }, {})
};

const makeTrainingData = obj => {
  return Object.entries(obj).map((data) => {
    const inputData = data[0]
    const result = data[1].toUpperCase()
    const output = {}
    output[result] = 1
    return {
      input: tokenize(inputData),
      output: output
    }
  })
};

const pushAll = (obj, data) => {
  Object.keys(obj).forEach(e => {
    obj[e].push([...data])
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

const getDataFromExcel = (fileName) => {
  const provision = xlsx.readFile(fileName)
  return xlsx.utils.sheet_to_json(provision.Sheets.PROV, {header: 1})
}

const createExcel = (name, data) => {
  const book = xlsx.utils.book_new()
  const bookSheet = xlsx.utils.json_to_sheet(data, { sheet: name})
  xlsx.utils.book_append_sheet(book, bookSheet, name)
  xlsx.writeFile(book, `./${name}.xlsx`)
}

module.exports = {
  tokenize: tokenize,
  makeTrainingData: makeTrainingData,
  pushAll: pushAll,
  getMostLikely: getMostLikely,
  getDataFromExcel: getDataFromExcel,
  createExcel: createExcel
};

