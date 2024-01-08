/*
Excercício Guiado 4 - Função com verificadores ou condicionais, mais refatoração.

    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
    e escolha a condiçao de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento será escolhida para efetuar o calculo adequado.

    Código Condição de Pagamento;
    - 1 À vista Débito, receber 10% de desconto;
    - 2 À vista no Dinheiro ou PIX. receber 15% de desconto;
    - 3 Em duas vezes, preço normal da etiqueta sem juros;
    - 4 Acima de duas vezes, preço normal da etiqueta mais juros de 10%;

Pegando um exercicio anterio, faça uma refatoração, deixando-o mais organizado e legivel.

-funcao-calcularJuros
*/

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, desconto) {
    return valor + (valor * (desconto / 100));
}

function calcularJuros() {
    if (formaDePagamento === 1) {
        return aplicarDesconto(precoEtiqueta, juros10)
    } else if (formaDePagamento === 2) {
        return aplicarDesconto(precoEtiqueta, juros15)
    } else if (formaDePagamento === 3) {
        return precoEtiqueta
    } else if (formaDePagamento === 4) {
        return aplicarJuros(precoEtiqueta, juros10)
    }
}

const juros10 = 10
const juros15 = 15
const precoEtiqueta = 100;
const formaDePagamento = 4;

console.log(calcularJuros());
