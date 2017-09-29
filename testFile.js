var fs = require('fs')
var pathToFile = process.argv[2]
var myNumber = undefined

function addOne(callback) {
  fs.readFile(pathToFile, function doneReading(err, fileContents) {
    var buf  = fileContents
    var str = buf.toString()
    myNumber = str.split('\n').length
    myNumber--
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)
