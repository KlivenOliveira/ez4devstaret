
const menor_valor =  1;
const maior_valor = 100;

const numero_secreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio (){
    return parseInt(Math.random() * maior_valor+1 )
}

console.log(numero_secreto)

const elementoMenorValor = document.getElementById('menor-valor')
const elmentoMaiorValor = document.getElementById('maior-valor')

elementoMenorValor.innerHTML = menor_valor
elmentoMaiorValor.innerHTML = maior_valor
