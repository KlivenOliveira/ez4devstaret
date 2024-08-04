essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo(){
    var palavra = "rever";
    var separaPalavras = palavra.split()
    var palavraInvertida = separaPalavras.reverse();
    palavraInvertida = palavraInvertida.join("");
        if(palavraInvertida = palavra){
            console.log('é um palindromo');
        }else {
            console.log('nao é um palinidromo')
        }
}