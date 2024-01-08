/*
Criando instancias com constructor
*/

class Humano {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idades é ${this.idade}`);
    }
}

const israel = new Humano('Israel', 33);
const amanda = new Humano('Amanda',33);

console.log(israel);