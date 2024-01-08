/*
Faça um programa para calcular o valor de uma viagem.

Você tera 3 variáveis. Sendo elas:
1 - Preço do Combustivel;
2 - Gasto médio de combustivel do carro por km;
3 - Distância em da viagem;
*/

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
