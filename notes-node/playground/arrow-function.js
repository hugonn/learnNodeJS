let square = (x) =>{
    let result = x * x;
    return result;
};

// Arrow Function simplificou a declaração de funções
let square2 = (x) => x * x;

console.log(square(9));
console.log(square(9));

// Dependendo da utilização, não é possível utilizar arrowfunction 

let user = {
    name:"Hugo",
    sayHi: () =>{
        console.log(`Hi. eu sou ${this.name}`); // Aqui vai dar problema pois arrow functions nao conseguem acessar as proprias propriedades do objeto
    },
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi. eu sou ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt("batman","robin","romario");

// funções regulares podem conter arrays de argumentos, arrow function não