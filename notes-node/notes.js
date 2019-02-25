console.log('Começaani notes.js');
const fs= require('fs');

let fetchNotes = () => {
    try{
        var notes = JSON.parse(fs.readFileSync('notes-data.json'));
        return notes;
    }catch(e){
        return [];
    }   
}

let saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>{
    console.log("Adding note -> ", title, body);
   
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    //função que retorna true or false se já existe algum arquivo com mesmo nome 

    // filter é função do array
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(note);
        return note;
    }
};

var getAll = () => {
    console.log("Getting all notes");
};

module.exports = {
    addNote,
    getAll,
    //getNote,
    //removeNote
};