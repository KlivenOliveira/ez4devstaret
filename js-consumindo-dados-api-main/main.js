const campoCep = $('#cep');
const campoCpf = $('#cpf');
const campoEnd = $('#endereco')
const campoNasc =$('#nascimento')
const campoBairro =$('#bairro')
const campoCidade =$('#cidade')
const campoEstado =$('#estado')



function DataNasc (dataAtual,dataNasc){
    dataAtual = new Date()
    dataNasc = new Date((campoNasc.val()))
    var b = dataAtual.getFullYear()
    var a = dataNasc.getFullYear()
    console.log(a);
    console.log(b);
    var c = b - a
    console.log(c)

    if(c < 18){
        alert('menor de idade')
        campoNasc.val('');   
      } 
  }


campoNasc.on('blur',() => {
    DataNasc();
})


campoCpf.on('keyup', () =>{
   input = campoCpf.val().length;
    console.log(input);

    if(input === 3 || input === 7){
        campoCpf.val(campoCpf.val()+'.')
    }else if(input === 11){
        campoCpf.val(campoCpf.val()+'-')
    }
})


campoCep.on('blur',() =>{

    let value = campoCep.val()
    const url = `https://viacep.com.br/ws/${value}/json/`;
    var error =  $('#erro');
    error.innerHTML = "";

    fetch(url)
    .then(resposta => resposta.json())
    .then( e =>{
        if (value = e.cep){
            campoEnd.val(e.logradouro);
            campoBairro.val(e.bairro);
            campoCidade.val(e.localidade);
            campoEstado.val(e.uf);
           console.log(JSON.stringify(e.cep))
           console.log(value);
        }else if(value != e.cep){
            alert('acontece algo pf')
        }
        

        
    })
})

