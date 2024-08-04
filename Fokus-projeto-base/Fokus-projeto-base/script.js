
const html = document.querySelector('html')
const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 
const banner = document.querySelector('.app__image');
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTempo = document.querySelector('#timer');
const titulo = document.querySelector('.app__title');
const titulo_dtq = document.querySelector('.app__title-strong')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const startPauseBt = document.querySelector('#start-pause')
const iniciarOuPauserBt = document.querySelector('#start-pause span')
const iconePlayOuPausa = document.querySelector('.app__card-primary-butto-icon')
const tempoNaTela = document.querySelector('#timer')



const musica = new Audio('sons/luna-rise-part-one.mp3') 
const pause = new Audio('sons/pause.mp3')
const resume = new Audio('sons/play.wav')
const beep = new Audio('sons/beep.mp3')

musica.loop= true

let tempoDecorridoEmSegundos = 1500
let intervaloId = null
let icone = ('')

musicaFocoInput.addEventListener('change',() =>{
    if(musica.paused)
        musica.play()
    else
        musica.pause()
})


startPauseBt.addEventListener('click',()=>{
    iconePlayOuPausa.setAttribute('src', `imagens/${icone}`)
})


focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    html.setAttribute('data-contexto', 'foco')
    alterarContexto('foco','foco.png')
    focoBt.classList.add('active')
    
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    html.setAttribute('data-contexto', 'descanso-curto')
    alterarContexto('descanso-curto','descanso-curto.png')
    curtoBt.classList.add('active')
   
})

longoBt.addEventListener('click',() => {
    tempoDecorridoEmSegundos = 900
    html.setAttribute('data-contexto', 'descanso-longo')
    alterarContexto('descanso-longo','descanso-longo.png')
    longoBt.classList.add('active')
 
})


function alterarContexto(contexto, imagem){
    mostrarTempo()
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
})

    html.setAttribute('data-contexto',contexto)
    banner.setAttribute('src', `imagens/${imagem}`)

    switch(contexto){
    case "foco":
        titulo.innerHTML = `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>`
    break;
    case "descanso-curto":
        titulo.innerHTML = ` Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
    ` 
    break;
    case "descanso-longo":
        titulo.innerHTML = `
        Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
    default:
        break;
  }
}

const contagemRegressiva = () =>{
    if (tempoDecorridoEmSegundos <= 0){
        iniciarOuPauserBt.textContent = "começar"
       // beep.play()
        alert('tempo Finalizado')
        zerar()
        return
    }
    
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciaroupausar)

function iniciaroupausar(){
    if (intervaloId ){
        icone = ('pause.png')
        iniciarOuPauserBt.textContent = "Resumir"
        pause.play()
        zerar()
        return
    }
    resume.play()
    icone =  ('play_arrow.png')
    intervaloId = setInterval(contagemRegressiva,1000)
    iniciarOuPauserBt.textContent = "Pausar"
   
}

function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
    
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br',{minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()


