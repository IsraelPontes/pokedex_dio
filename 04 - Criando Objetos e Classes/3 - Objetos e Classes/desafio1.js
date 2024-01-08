/*
Criando uma classe Carro
Crie uma classe para representar um carro.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustivel nos dê o valor 
gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePecuro(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const gol = new carro('Gol', 'Verde', 1 / 12);
const doblo = new carro('Fiat', 'Azul', 1 / 10);

console.log(gol.calcularGastoDePecuro(70, 5));
console.log(doblo.calcularGastoDePecuro(70, 5));

