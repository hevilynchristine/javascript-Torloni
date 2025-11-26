//  Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

window.alert("Valor da compra")
let valorcompra = parseFloat (prompt(" Qual o valor total da sua compra?"))

let desconto = 0;

if(valorcompra <= 100) {
    desconto = 0;
    } else if (valorcompra <= 200) {
    desconto = valorcompra * 0.10;
} else {
    desconto = valorcompra * 0.20;
}

let valorfinal = valorcompra - desconto

alert("valor da compra: R$ " + valorcompra)

alert("Desconto aplicado: R$ " + desconto)

alert("valor final a pagar: R$ " + valorfinal) 