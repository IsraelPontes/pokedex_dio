/*
Criando uma classe Pessoa
Crie uma classe para represenar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de deizer o valor do seu IMC (IMC = peso / (altura *altura))
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
       return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(){
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Peso Normal';
        }else if(imc >= 18.5 && imc < 25){
            return'Acima do Peso';
        }else if(imc >= 25 && imc < 30){
            return'Acima do Peso';
        }else if(imc >= 30 && imc < 40){
            return'Obeso';
        }else{
            return'Obesidade Grave';
        }
    }
}

const jose = new Pessoa ('José', 70, 1.75);
const israel = new Pessoa ('Israel', 65, 1.73);

console.log(jose.calcularImc().toFixed(2), jose.classificarImc() );
console.log(israel.calcularImc().toFixed(2), israel.classificarImc() );

