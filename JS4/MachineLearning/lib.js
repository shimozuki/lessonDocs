module.exports = {
  makeTrainingData: data =>Object.entries(data).map(([k,v]) => ({ input: k, output: k} ))
}
