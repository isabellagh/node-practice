const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg);

const greenmsg = chalk.green.bgRed.bold("success")
console.log(greenmsg);