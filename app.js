const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    handler: function () {
        console.log('adding a new note');
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('removing the note');
    }
})

// add, remove, read, list

// console.log(process.argv);
console.log(yargs.argv);