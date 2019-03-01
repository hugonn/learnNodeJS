let somepromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //resolve('worked');
        reject('nao deu');
    }, 2500);
    
})

somepromise.then((message) => {
   
    console.log('success: ', message);

}, (errorMessage) =>{
   
    console.log('Error:', errorMessage);
});