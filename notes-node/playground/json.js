// var obj = {
//     name:'Andrew'

// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Andrew", "age":26}';
// var person = JSON.parse(personString);

// console.log(personString);
// console.log(person.name);

const fs = require('fs');

var originalNote = {
    title:'lalala',
    body: 'some bode'
};

// transforma em string pra salvar em um arquivo
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
// transforma a string vinda do arquivo em objeto 
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);