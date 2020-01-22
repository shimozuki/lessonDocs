const brain = require('brain.js')
const lib = require('./lib.js')

const trainingData = require('./provisionData.json')
const makeArr = lib.makeTrainingData(trainingData)

const model = new brain.NeuralNetwork()
modle.tarin(makeArr)
