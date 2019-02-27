console.log('Starting app');

// bricando com assincronia.. função callback é aquela que fica esperando um "retorno" ou do client side ou do server side
setTimeout(() =>{
    console.log('inside of callback');
},2000);


setTimeout(() =>{
    console.log('callback 2'); //call stack 
},0);


console.log('finishing up');