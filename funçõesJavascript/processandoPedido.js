function processarPedido(name, tipoCliente, callback) {
    console.log(`Processando pedido de ${name}...`);
    callback(name, tipoCliente);
}
 
function mensagemPersonalizada(name, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${name}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${name}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${name}!`);
    }
}
 
processarPedido("Lucas", "vip", mensagemPersonalizada);