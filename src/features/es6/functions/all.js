let arrowFunctions = require('./arrowFunctions.js')
let classFeature = require('./class.js')
let superFeature = require('./super.js')
let generators = require('./generators.js')

module.exports = [
  arrowFunctions.func,
  classFeature.func,
  superFeature.func,
  generators.func
]
