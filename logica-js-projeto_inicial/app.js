var Minimo = 1;
var Maximo = 100;
var numSecreto = Math.floor(Math.random() * Maximo + 1) + 1;
var acerto = document.querySelector('.container__texto-azul')
var Chute = 0
let tentativas = 3
console.log(numSecreto);
console.log(Chute)

var divDoChute = document.querySelector('.container__texto')
const DivPrincipal = document.querySelector('.container')
const divDoTrofeu = document.querySelector('.container__informacoes')
const divDaImage = document.querySelector('.container__conteudo')
const h1 = document.createElement('h1')
const span = document.createElement('span')
const h2 = document.createElement('h2')
const img = document.createElement('img')
const img2 = document.createElement('img')

    



while(tentativas!= 0){
    console.log(numSecreto);
    console.log(Chute)
    console.log(tentativas)
     Chute = prompt('Digite um numero entre ' + Minimo  +' e '+ Maximo + ' voce tem ' + tentativas + ' tentativas restante' );
 
     if(Chute == numSecreto){
        alert('Você acertou o numero secreto')
        DivPrincipal.append(divDaImage,divDoTrofeu,divDoChute)
        divDaImage.appendChild(img)
        divDaImage.appendChild(img2)
        divDaImage.appendChild(divDoTrofeu)
        divDoTrofeu.appendChild(divDoChute)
        divDoChute.appendChild(h2)
        img2.setAttribute('src','./img/trophy.png')
        img.setAttribute('src','./img/robot.png')
        img.classList.add('.container__imagem-robo')
        divDoChute.appendChild(h1)
        h1.textContent = "voce " + ""
        span.classList.add('container__texto-azul')
        h1.appendChild(span)
        span.textContent = "Acertou"
        h2.textContent = `Você acertou o número secreto ${numSecreto}`
        break;
    }
if (Chute < numSecreto){
    alert(`O numero secreto é maior que   ${Chute}`)
   /*DivPrincipal.append(divDaImage,divDoTrofeu,divDoChute)
    divDaImage.appendChild(img)
    //divDaImage.appendChild(img2)
    divDaImage.appendChild(divDoTrofeu)
    divDoTrofeu.appendChild(divDoChute)
    divDoChute.appendChild(h2)
    //img2.setAttribute('src','./img/trophy.png')
    img.setAttribute('src','./img/robot.png')
    img.classList.add('.container__imagem-robo')
    divDoChute.appendChild(h1)
    h1.textContent = "voce " + ""
    span.classList.add('container__texto-azul')
    h1.appendChild(span)
   span.textContent = "Errou"
    h2.textContent = `O numero secreto é maior que   ${Chute}`*/
}

else{
    alert(`O numero secreto é menor que   ${Chute}`)
   /* DivPrincipal.append(divDaImage,divDoTrofeu,divDoChute)
    divDaImage.appendChild(img)
    //divDaImage.appendChild(img2)
    divDaImage.appendChild(divDoTrofeu)
    divDoTrofeu.appendChild(divDoChute)
    divDoChute.appendChild(h2)
    img2.setAttribute('src','./img/trophy.png')
    img.setAttribute('src','./img/robot.png')
    img.classList.add('.container__imagem-robo')
    divDoChute.appendChild(h1)
    h1.textContent = "voce " + ""
    span.classList.add('container__texto-azul')
    h1.appendChild(span)
    span.textContent = "Errou"
    h2.textContent = `O numero secreto é menor que   ${Chute}`*/
}


tentativas --
if(tentativas == 0){
alert(`Você perdeu, o numero era ${numSecreto}`)
 DivPrincipal.append(divDaImage,divDoTrofeu,divDoChute)
 divDaImage.appendChild(img)
 //divDaImage.appendChild(img2)
 divDaImage.appendChild(divDoTrofeu)
 divDoTrofeu.appendChild(divDoChute)
 divDoChute.appendChild(h2)
 //img2.setAttribute('src','./img/trophy.png')
 img.setAttribute('src','./img/robot.png')
 img.classList.add('.container__imagem-robo')
 divDoChute.appendChild(h1)
 h1.textContent = "voce " + ""
 span.classList.add('container__texto-azul')
 h1.appendChild(span)
 span.textContent = "Falhou"
 h2.textContent = `O numero secreto era   ${numSecreto}`
}
}

