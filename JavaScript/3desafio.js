const objeto = {
    nome: 'Caio',
    idade: 18,
    email: 'caiobqz@gmail.com'
}

const { nome, idade, email } = objeto;
console.log(nome, idade, email);


const linguagens = ["JavaScript", "Python", "Ruby"];
const [ling1, ling2, ling3] = linguagens;

console.log(ling1,ling2,ling3);


function somarTudo(...numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
return soma
}

console.log(somarTudo(1,2,3,4,5,));


const frtuas1 = ['uva','pera','maça'];
const outrasfrutas = ['melancia', 'manga', 'laranja'];
const todasAsFrutas = [...frtuas1,...outrasfrutas];
console.log(todasAsFrutas);


const dados1 = ['Caio'];
const dados2 = [19];
const perfil = [...dados1, ...dados2];
console.log(perfil);


function saudacao(nome = 'visitante'){
    console.log(`Olá, ${nome}!`);
}


const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();

console.log(`Hoje é ${dia}/${mes}/${ano}`);


/*function somar(a, b){
    return a + b;
}

const somar = require('./somar');

console.log(somar(5, 3));

export function somar(a, b){
    return a + b;
}

import { somar } from './somar.js';

console.log(somar(5, 3));*/



/*function livro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
};
const livro1 = new livro("Dom Casmurro", "Machado de Assis");
const livro2 = new livro("1984", "George Orwell");

console.log(livro1.descrever());
console.log(livro2.descrever());*/

function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.descrever = function () {
    return "O livro " + this.titulo + " foi escrito por " + this.autor + ".";
  };
}

const livro = new Livro("O Hobbit", "J. R. R. Tolkien");
console.log(livro.descrever());