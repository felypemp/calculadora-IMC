const form = document.querySelector('.formulario')
var inputPeso = (document.querySelector('.peso')).value;
var inputAltura = (document.querySelector('.altura')).value;



form.addEventListener('submit', function(e) {
    e.preventDefault();
    resultado();
})

function criaP(className){
    const p = document.createElement('p');
    return p;

}


function resultado(msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML ='';
    resultado.appendChild(criaP())
    
}

