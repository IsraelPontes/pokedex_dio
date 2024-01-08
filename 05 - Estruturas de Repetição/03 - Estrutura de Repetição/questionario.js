const numerosPares1 = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares1.push(i);
}

const listaDeValores = [1, 2, 3, 4, 5];
const valor = listaDeValores[2];

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(i);
}

console.log(numeros);
console.log(numerosPares1);
console.log(valor);
console.log(numerosPares);