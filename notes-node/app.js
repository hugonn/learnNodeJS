console.log('Starting app.js');

// Trabalhar com arquivos
const fs = require('fs');
//Funções
const _ = require('lodash');
// Passagem de parametros via arquivos
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,   // coloca o parametro como obrigatorio
  alias: 't'  //shortcut para chamar o parametro do metodo
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,   // coloca o parametro como obrigatorio
  alias: 'b'  //shortcut para chamar o parametro do metodo
};

const argv = yargs
.argv
.help() // No metodo ADD fora adicionado uma série de restrições
.command('add','Add a new note',{
  title:titleOptions,
  body:bodyOptions
})
.command('list','list All Notes')
.command('read','Read a note',{
  title:titleOptions,
  body: bodyOptions
})
.command('remove','Remove a note',{
  title:titleOptions,
  body: bodyOptions
});
//var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {

  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }

} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  
  allNotes.forEach(element => {
    notes.logNote(element);
  });

} else if (command === 'read') {
  let note = notes.getNote(argv.title);

  if(note){
    console.log('Note Found');
    notes.logNote(note);
  }else{
    console.log('Note not Found');
  }

} else if (command === 'remove') {

  let noteRemoved = notes.removeNote(argv.title);
  // Operadores ternarios
  let message = noteRemoved  ? "Remove with success" : "Note not found";
  console.log(message);

} else {
  console.log('Command not recognized');
}
