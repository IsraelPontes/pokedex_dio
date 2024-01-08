//Conceitos básicos sobre funções Funções 

function sayMyName(name) {
    console.log('Your name is ' + name);
}

function quadrado(valor) {
    return valor * valor;
}

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}


sayMyName('Israel');
sayMyName('Amanda');

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));