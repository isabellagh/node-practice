const chalk = require('chalk')
const { argv } = require('process')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')


// add, remove, read, list

//create add command
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('title: ' + argv.title);
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


yargs.parse()
// console.log(process.argv);
// console.log(yargs.argv);