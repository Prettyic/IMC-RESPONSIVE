function calcular(evento) {
    evento.preventDefault();
    
    let peso = document.getElementById('inputPeso').value;
    let altura = document.getElementById('inputAltura').value;

    let alt2 = altura * altura;
    let imc = peso / alt2;
    
    let resultado = document.getElementById('resultado');
    
    resultado.innerText = 'IMC: ' + imc.toFixed(2);

    
    // document.getElementById('tableimc').style.visibility = 'visible';

    document.getElementById('imagen-bajo').classList.add('ocultar');
    document.getElementById('imagen-normal').classList.add('ocultar');
    document.getElementById('imagen-sobrepeso').classList.add('ocultar');
    document.getElementById('imagen-obesidad').classList.add('ocultar');

    if (imc < 18.5) {
        document.getElementById('imagen-bajo').classList.remove('ocultar');
        
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('imagen-normal').classList.remove('ocultar');
        
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('imagen-sobrepeso').classList.remove('ocultar');
    } else if (imc >= 30) {
        document.getElementById('imagen-obesidad').classList.remove('ocultar');
    }
}



// pseo/altura elvado potencia de 2

