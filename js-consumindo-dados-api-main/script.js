  //const campoCep = document.querySelector('#cep');
  //const campoEnd = document.querySelector('#endereco');
  //const campoCpf = document.querySelector('#cpf');

// BUSCADOR CEP  VIA CEP//
  /*campoCep.addEventListener('blur',e =>{
    var value =  document.querySelector('#cep').value.replace(/[^0-9]+/, '');
    var consultaCep = (`https://viacep.com.br/ws/${value}/json/`);
    https://viacep.com.br/ws/01001000/xml/
    fetch(consultaCep).then(resposta => resposta.json()).then(r =>{
        if(r.logradouro){
            campoEnd.value = r.logradouro;
        } else throw Error('esse cep não existe');
    }).catch(erro =>(alert('Erro de api')))
    .finally(sucesso =>(alert('Concluido')));
})

//cpf input maluco
campoCpf.addEventListener('keypress',e =>{
    let inputLenght = campoCpf.value.length;
    console.log(inputLenght)

    if(inputLenght === 3 || inputLenght === 7){
    campoCpf.value +='.'
} else if( inputLenght === 11){ 
    campoCpf.value +='-'}
})*/