const pessoa = {
    nome: "Caio",
    idade: 18,
    pets: ["Lincon"], 
    nacionalidade: "Brasileiro"
}
for(const chave in pessoa) {
    console.log('Chave: ', pessoa[chave]);
}
const chaves = Object.keys(pessoa);

const valores = Object.values(pessoa);

const entradas = Object.entries(pessoa);

console.log('Chaves:', chaves);
console.log('Valores:', valores);
console.log('Entradas (chave/valor):', entradas);