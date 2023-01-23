const form = document.getElementById('form-number');
const valorA = document.getElementById('numero-A');
const valorB = document.getElementById('numero-B');
const containerMsgSucesso = document.querySelector('.good-message');
const containerMsgSemSucesso = document.querySelector('.bad-message');
let formEValido = false;

function validaNumero (valorA, valorB) {
    return valorB > valorA;
    
}

form.addEventListener('submit', function(e) {
    
    e.preventDefault(); 
    
    const mensagemSucesso = `Formulário aceito, valor do campo B: <b>${valorB.value}</b> é maior que valor do campo A: <b>${valorA.value}</b>`;
    const mensagemSemSucesso = `Formulário não aceito, pois o valor A: <b>${valorA.value}</b> precisa ser menor que o valor do campo B: <b>${valorB.value}</b>`;
    console.log(valorA);
    console.log(valorB);
    
    formEValido = validaNumero(valorA.valueAsNumber, valorB.valueAsNumber)
    if (formEValido) {
        containerMsgSucesso.innerHTML = mensagemSucesso;
        containerMsgSucesso.style.display = 'block';
        containerMsgSemSucesso.style.display = 'none';
        
        
        valorA.value = ' ';
        valorB.value = ' ';  
        

    } else {
        containerMsgSemSucesso.innerHTML = mensagemSemSucesso;
        containerMsgSemSucesso.style.display = 'block';
        containerMsgSucesso.style.display = 'none';
        
        valorA.value = '';
        valorB.value = '';
        
    }

});