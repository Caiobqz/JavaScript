const pessoa = {
    nome: 'Caio',
    idade: 18,
    profissao: 'Programador'
}
console.log("Nome:", pessoa.nome);

pessoa.idade = 19;
console.log('Nova idade', pessoa.idade);
pessoa.cidade = 'Tokyo';
function apresentarPessoa(pessoa) {
    return "Olá! Meu nome é " + pessoa.nome + 
    ", tenho " + pessoa.idade +
    " anos e sou " + pessoa.profissao + '.';
}
console.log(apresentarPessoa(pessoa));
const pessoas = [ 

{ nome: "Ana", idade: 17 }, 

{ nome: "Carlos", idade: 22 }, 

{ nome: "Mariana", idade: 15 } 

]; 
for (let p of pessoas) { 

if (p.idade >= 18) {
console.log(`${p.nome} é maior de idade.`); 
} 
}

const usuario = {
  nome: "Beatriz",
  saudacao: function() {
    console.log("Olá, eu sou " + usuario.nome);
  }
};

usuario.saudacao();
for(let chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`);
}

const produto = {
    preco: 30,
    quantidade: 3
};
const valorTotal = produto.preco * produto.quantidade;
console.log(`Valor total da compra: R$${valorTotal}`);