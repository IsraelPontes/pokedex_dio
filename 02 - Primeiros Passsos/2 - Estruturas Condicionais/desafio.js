/*
Faça um programa para calcular o valor de uma viagem.

Você tera 5 variáveis. Sendo elas:
1 - Preço do Combustivel;
2 - Gasto médio de combustivel do carro por km;
3 - Distância em da viagem;
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}