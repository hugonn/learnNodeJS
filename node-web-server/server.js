const express = require('express'); // Biblioteca web server
const hbs = require('hbs');
const fs = require('fs');

//process possui todas as variaveis 
const port = process.env.PORT || 3000;

let app = express();

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.set('view engine', 'hbs');

// next quando middleware function ta pronta
app.use( (req,res,next) => {

   // next(); só roda o resto quando next for disparado

    let now = new Date().toString();
    let log = `${now} : ${req.method} ${req.url}`;

    fs.appendFile('server.log',log + '\n', (err) => {
        if(err){
            console.log("Error on append log to server");
        }
    });
  
    next();

});
// 677Heroku@
// app.use((req,res,next) => {
//     res.render('maintenance.hbs');
// })

// __dirname parametro que possui o caminho do projeto
app.use(express.static(__dirname + '/public'));
// Handler para HTTP Request get

app.get('/about', (req,res) =>{
    res.render('about.hbs',{
        pageTitle : 'About PAGE',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req,res) =>{
    res.send({
        errorMessage: 'Problema de requisição'
    
    });
});

app.get('/', (req,res) =>{
    res.render('home.hbs',{
        pageTitle : 'Home PAGE',
        welcomeMessage:'Bem vindo a página do hugao',
        currentYear: new Date().getFullYear()
    });
});

// App rodando e escutando em alguma porta. Loop de execução
app.listen(port,() => {
    console.log(`ver rodando na porta ${port}`);
});
