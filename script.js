
var ancestral = "Davi";
ancestral = "Moises";

let nome = "João";
let Nome = "Maria";

let idadeJ = 26;
let idadeM = 28;

nome = "São Jose";
Nome = "Santa Maria"

const horasDia = 24;

const deMaior = true;

let endereco;

const pessoa = {
    nome: "Ana",
    idade: 25
}

pessoa.nome = "Beatriz"


//atribuição
let meuNome = "joão";

//redeclaração
meuNome = "pedro";

//const mensagem = `Meu nome é ${meuNome} e tenho ${idade} anos`;
//const mensagem = "Meu nome é "+ meuNome + " e tenho " + idade + " anos";
//console.log(mensagem);

//atribuição - objeto
const usuario = {
    nome: "jose",
    idade: 35
};
console.log(usuario)
console.log(usuario.idade) //35


const idade = 18

if (idade >= 18) {
    console.log('Maior de idade. Pode dirigir!')
} else {
    console.log('Menor de idade. Passa longe.')
}

let validaIdade = idade >= 18 ? "maior" : "menor"
console.log("Voce é", validaIdade,"de idade.")

const statusSemaforo = "vermelho";
switch (statusSemaforo) {
    case "vermelho":
        console.log("Pare!");
        break;
    case "verde":
        console.log("Siga!");
        break;
    default:
        console.log("Aguarde");
}

let contador = 0;

while (contador < 3) {

 console.log(`O contador é ${contador}.`);

 contador++; // evitar um loop infinito

}

for (let i = 0; i < 5; i++) {

 console.log(`O valor de i é ${i}.`);

}

const frutas = ["Maçã", "Banana", "Laranja", "Melão", "Uva"];

console.log(frutas);
console.log(frutas[1]);

for (const fruta of frutas) {

 console.log(fruta);

}

function somar(a, b) {

 return a + b;

}

const resultado = somar(5, 3);

console.log(resultado); // 8

const multiplicar = function(a, b) {

 return a * b;

};

console.log(multiplicar(5, 3)); // 15

const dividir = (a, b) => {

 return a / b;

};

// Sintaxe simplificada para retorno de 1 linha

const subtrair = (a, b) => a - b; 

console.log(dividir(10, 2)); // 5

console.log(subtrair(10, 2)); // 8