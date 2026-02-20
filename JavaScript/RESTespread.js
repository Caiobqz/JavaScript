let numeros = [1, 2, 3, 4, 5];
let clone = [...numeros]
console.log(numeros);
console.log('esse e o clone', clone);


let ingredientesBase = ['ovos', 'açucar', 'chocolate'];
let ingredientesExtras = ['farinha', 'leite', 'fermento'];
const listaCompleta = [...ingredientesBase, ...ingredientesExtras];
console.log('Essa e a lista completa:', listaCompleta);


const cores = ['azul', 'roxo', 'verde', 'preto'];
const [preimeira, ...restante] = cores;
console.log(preimeira);
console.log(restante);


