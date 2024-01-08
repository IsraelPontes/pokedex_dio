//Excercício Guiado 3 - Função com verificadores ou condicionais.
// invocandoUmaFuncaoParaDentroDeOutra

function escrevaMeuNome(name){
    return 'Seu nome é ' + name;
}

function classificarIdade(idade) {
    if(idade <= 18 ){
        return ', Você é menor de Idade.'
    }else{
        return ', Você é maior de Idade.'
    }
}

function main() {
const idade = 33;
const name = 'Israel';

console.log(escrevaMeuNome(name) + classificarIdade(idade));
}

main();