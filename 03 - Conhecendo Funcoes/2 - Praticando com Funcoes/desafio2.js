//Excercício Guiado 2 - Função com verificadores ou condicionais.
//Funcao-verificadores

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

const idade = 33;
console.log(escrevaMeuNome('Israel') + classificarIdade(idade));




