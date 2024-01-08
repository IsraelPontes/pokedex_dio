
const funcoes = require(`../01 - Desvendando as Funções gets e print/aula1`);
console.log(funcoes);


const { gets, print } = require(`./aula1`);

const numeroSorteados = [];
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numeroSorteados.length; i++) {
    const numeroSorteado = numeroSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }

}

print(maiorValor);







