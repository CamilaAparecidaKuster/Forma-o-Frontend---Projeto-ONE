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
let temPassagemComprada = false;
const destino = "Salvador";

//exibição dos destinos
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

//verificação se a pessoa pode comprar

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador <3){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe")
        destinoExiste = true;
        break;
    }
    contador += 1;   
}

console.log("Destino existe:" , destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
}else{
    console.log("Tivemos um erro");
}

for(let cont = 0; cont <3 ; cont ++){
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe")
        destinoExiste = true;
        break;
    }       
}
