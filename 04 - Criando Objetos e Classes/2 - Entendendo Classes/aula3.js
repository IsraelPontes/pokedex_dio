/*
Funções Recebendo Objetos
*/

class Humano {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
    
    //Método
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idades é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const israel = new Humano('Israel', 33);
const amanda =new Humano('Amanda', 34);

compararPessoas(israel, amanda);

