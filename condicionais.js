console.log("Trabalhando com condicionais");

//criando um array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

//inicializando variaveis
const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

//exibição dos destinos
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

//verificação se a pessoa pode comprar
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(2, 1);//quero deletar a posição dois e um elemento
// } else if (estaAcompanhada == true) {
//     console.log("Comprador menor de idade acompanhado")
//     listaDeDestinos.splice(2, 1);
//     console.log(listaDeDestinos);
// } else {
//     console.log("Comprador não é maior de idade, não posso vender esse pacote");
// }

//console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador >! 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(2, 1);//quero deletar a posição dois e um elemento
} else {
    console.log("Comprador não é maior de idade e não está acompanhado, não posso vender esse pacote");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada == true){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode comprar pois não tem a passagem")
}