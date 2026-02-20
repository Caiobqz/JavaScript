const nomes = ['Ana', 'Davi', 'Caio', 'Kaique'];

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

let frutas = ['Uva', 'Banana', 'Manga'];
console.log("Antes:", frutas);
frutas.push('Maça');
frutas.shift();
console.log('Agora:', frutas);

let cidades = ["Nova york", "BH", "Tokyo"];
console.log("Total de cidades:", cidades.length);

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 

let soma = 0; 

for (let i = 0; i < numeros.length; i++) { 

soma += numeros[i]; 

} 

console.log("Soma total: " + soma); 

let notas = [7, 8, 6, 9]; 

let somaNotas = 0; 

for (let nota of notas) { 

somaNotas += nota; 

} 

let media = somaNotas / notas.length; 

if (media >= 7) { 

console.log("Aprovado com média: " + media); 

} else { 

console.log("Reprovado com média: " + media); 

} 

let precos = [100, 200, 300]; 

let comDesconto = precos.map(function(preco) { 

return preco * 0.9; 

}); 

let idades = [12, 18, 25, 16, 30]; 

let maiores = idades.filter(function(idade) { 

return idade >= 18; 

}); 

console.log("Maiores de idade:", maiores);

let carrinho = [50, 30, 20];
let total = 0;
for (let valor of carrinho){
total += valor;

}
let desconto20 = total * 0.8;
console.log("Total com desconto de 20%: R$ " + desconto20);

let tarefas = ["Estudar", "Lavar a louça", "Ir ao mercado", "Caminhar", "Dormir"];
let concluida = [false, true, false, true, false];

let tarefasPendentes = tarefas.filter(function(tarefa, index) {
  return concluida[index] === false;
});
console.log("Tarefas pendentes:", tarefasPendentes);