// index.js
const brain = require('brain.js')
const lib = require('./lib.js') // You will need to write this

const trainingData = require('./provisionData.js')
const makeArr = lib.makeTrainingData(trainingData)

console.log(trainingData, 'TD')

const model = new brain.NeuralNetwork()
model.train(makeArr)
