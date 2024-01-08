/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
e escolha a condiçao de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento será escolhida para efetuar o calculo adequado.

Código Condição de Pagamento;
- 1 À vista Débito, receber 10% de desconto;
- 2 À vista no Dinheiro ou PIX. receber 15% de desconto;
- 3 Em duas vezes, preço normal da etiqueta sem juros;
- 4 Acima de duas vezes, preço normal da etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaDePagamento = 4;

if(formaDePagamento ===1){
    const valor = precoEtiqueta - (precoEtiqueta * 0.10) 
    console.log(valor)
}else if(formaDePagamento ===2){
    const valor = precoEtiqueta - (precoEtiqueta * 0.15) 
    console.log(valor)
}else if(formaDePagamento ===3){
    const valor = precoEtiqueta
    console.log(valor)
}else if(formaDePagamento ===4){
    const valor = precoEtiqueta + (precoEtiqueta * 0.10) 
    console.log(valor)
}