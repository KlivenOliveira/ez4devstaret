


const btnCep = document.querySelector('#consultabotao');
const cep = document.querySelector('#cep')
const formularioDois = document.querySelector('[data-formulario2]');


//localData
formularioDois.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        "cep": e.target.elements["cep"].value,
    }
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = "index.html";
})

btnCep.addEventListener('click', e =>{
    const value = cep.value.replace(/[^0-9]+/, '');
    const url = `https://viacep.com.br/ws/${value}/json/`;

    fetch(url)
    .then (Response =>Response.json())
    .then (json =>{
        if (json.logradouro){
            document.querySelector('#rua').value = json.logradouro;
            document.querySelector('#bairro').value = json.bairro;
            document.querySelector('#cidade').value = json.localidade;
            document.querySelector('#uf').value = json.uf;
        };
    });
});
       