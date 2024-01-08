/*
Como Crias Classes e Intancias
*/

class Humano {
    nome;
    sobreNome1;
    sobreNome2;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idades é ${this.idade}`);
    }
}

const israel = new Humano();
israel.nome = 'Israel';
israel.idade = 33;

const amanda = new Humano();
amanda.nome = 'Amanda';
amanda.idade = 33;

israel.descrever()
amanda.descrever()