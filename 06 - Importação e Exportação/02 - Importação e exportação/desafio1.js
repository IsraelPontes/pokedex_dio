/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98

-maior-numero-sorteado
*/
const {gets, print }= require(`../01 - Funções gets e print/aula1`);
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