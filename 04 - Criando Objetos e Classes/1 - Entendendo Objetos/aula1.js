/*
Estrutura Básica de um Objeto.
É uma estrutura dinâmica de chave e valor
*/

const israel = {
    nome: 'Israel ',
    sobreNome1: 'Calista ',
    sobreNome2: 'de Pontes',
    idade: 33,
}

console.log(israel.nome, israel.sobreNome1, israel.sobreNome2 + ' idade ' + israel.idade);

/*
Editando informaçõe de um Objeto.
*/
//Adicionando um novo elemento ao objeto
israel.altura = 1.73;
console.log(israel);

//removendo um elemento de um objeto
delete israel.sobreNome1;
console.log(israel);

//Criando Métodos para Objetos
const humano = {
    nome: 'Israel',
    sobreNome1: 'Calista',
    sobreNome2: 'de Pontes',
    idade: 33,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idades é ${this.idade}`);
    }
};

humano.descrever();

//Sobreecrever.
humano.descrever = function(){
    console.log(`Meu nome é ${this.nome}`);
}

humano.descrever();

//Acessando dinamicament valores de um Objeto.
const atributo = 'idade';
console.log(humano[atributo]);
console.log(humano['idade']);

humano['idade'] = 'teste';
humano.idade = 'teste';



