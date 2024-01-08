/*
Apenas números pares
Crie um programa que seja capaz de percorrer uma lista de números e impares cada número por vez
*/

const numeros = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
console.log('Números Pares');
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0) {
        console.log(numero);
    }
}
console.log('Números Ímpares');
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 1) {
        console.log(numero);
    }
}
