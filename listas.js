console.log("Trabalhando com listas");
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis:");
//console.log(salvador,saoPaulo,rioDeJaneiro);

//criando um array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando mais itens na lista
listaDeDestinos.splice(2,1); //quero deletar a posição dois e um elemento


console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //exibindo a posição 1 da lista