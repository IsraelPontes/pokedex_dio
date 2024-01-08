/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade 
calcule e imprima a sua média e a sua classificaçao conforme a tabela abaio.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Media nemor que 5, reprovação;
- Média entre 5 e 7, recuperação;
Média acima de 7, passou de semestre:
*/

const nota1 = 7;
const nota2 = 0;
const nota3 = 1;

const media = (nota1 + nota2 + nota3) / 3

if (media < 5){
    console.log('Reprovado')
} else if(media >= 5 && media <= 7){
    console.log('Recuperação')
}else{
    console.log('Passou de Semestre')
}