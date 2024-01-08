/*Funções invocadas imediatamente:
São funções do tipo express, acesso rápido
elas são executadas primeiro, e o mais rápido possivel
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Peso Normal';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Acima do Peso';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do Peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }

}
/*
De acordo com as aulas anteriores iremos faazer as alterações para vermos o antes e o depois.
*/
//Antes da alteração
/*
function main() {
    const peso = 45;
    const altura = 1.73;

    let imc = calcularImc(peso, altura);
    imc = imc.toFixed(2)
    console.log(imc, classificarImc(imc));
}
main()
*/
//Depois da alteração
(function () {
    const peso = 45;
    const altura = 1.73;

    let imc = calcularImc(peso, altura);
    imc = imc.toFixed(2)
    console.log(imc, classificarImc(imc));
})();