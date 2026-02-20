const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numeros) =>{
    return numeros % 2 === 0;
})
const numerosImpares = numeros.filter((numeros) =>{
    return numeros % 2 != 0;
})
const numerosDobrados = numeros.map((numeros) =>{
return numeros * 2;
})

console.log('Todos os números:', numeros);

console.log('Todos os números pares:', numerosPares);

console.log('Todos os números ímpares:', numerosImpares);

console.log('Todos os números dobrados:', numerosDobrados);