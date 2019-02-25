console.log("Sarting app");

const clear = require('clear');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

clear();

//Passagem de argumentos entre .js
const argv = yargs.argv;

var command = process.argv[2];

console.log(command);
console.log(process.argv);
console.log(argv);

if(command === 'add'){
  let note =  notes.addNote(argv.title,argv.body);
}
else if (command === 'list'){
    notes.getAll();
}
else if (command === 'read')
    console.log("reading notes");
else if(command ==='remove')
    console.log('removing note')
else
    console.log('Command not recognize');