function saudacao(){
    console.log("Olá! Seja bem-vindo(a)!");
} saudacao();
function apresentarPessoa(nome, idade){
    console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos.");
}
apresentarPessoa("Caio", 18);
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc;
}
let resultadoIMC = calcularIMC(55, 1.70);
console.log("Seu IMC é:" + resultadoIMC);

function verificarAprovacao(nota){
    if (nota >= 7){
        console.log('Aprovado');
    } else{
        console.log('Reprovado');
    }
}
verificarAprovacao(7);

function ehPar(numero){
    return numero % 2 === 0;
}
console.log('O número é par?\n' + ehPar(2));

/*function somar(a, b) { 

return a + b; 

} 
console.log("Soma: " + somar(5, 10));*/

const somarArrow = (a, b) => a + b;
console.log('O valor da soma é:' + somarArrow(5, 10));


function calcularTroco(valorCompra, valorPago) {
  let troco = valorPago - valorCompra;
  return troco;
}

let resultadoTroco = calcularTroco(35.9, 50);
console.log("Troco: R$ " + resultadoTroco);

function executarAcao(acao) { 

acao(); 

} 

executarAcao(function() { 

console.log("Executando ação!"); 

}); 


function fazerPergunta(pergunta, respostaCorreta) { 

let respostaUsuario = respostaCorreta; // simulação da resposta 

if (respostaUsuario === respostaCorreta) { 

console.log("Resposta correta!"); 

} else { 

console.log("Resposta errada!"); 

} 

} 

fazerPergunta("Qual é a capital do Brasil?", "Brasília");