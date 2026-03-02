const calcularFrete = (numero) => {
  if (numero <= 5) {
    console.log('O valor do frete é: 5');
  } else if (numero > 5 && numero <= 20) {
    console.log(`O valor do frete é: ${numero * 0.5}`);
  } else {
    console.log('O valor do frete é: 20');
  }
};
console.log(calcularFrete(3)); 
console.log(calcularFrete(12)); 
console.log(calcularFrete(25));