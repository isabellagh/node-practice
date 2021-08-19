const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')


// add, remove, read, list

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

// create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log('listing all the notes');
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('read a note');
    }
})



// console.log(process.argv);
console.log(yargs.argv);