/*
2) O IMC - Indeice de Massa Corporia é um critério da Organização mundial da Saúde
Para das uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adulto condições:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 45;
const altura = 1.73;

let imc = peso / Math.pow(altura, 2);
imc = imc.toFixed(2)
console.log(imc);

if (imc < 18.5) {
    console.log('Peso Normal');
}else if(imc >= 18.5 && imc < 25){
    console.log('Acima do Peso');
}else if(imc >= 25 && imc < 30){
    console.log('Acima do Peso');
}else if(imc >= 30 && imc < 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave');
}




