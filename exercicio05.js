// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

 window.alert("Digite três numeros")
let n1 = prompt("Digite seu primeiro numero")
let n2 = prompt("Digite seu segundo numero")
let n3 = prompt("Digite seu terceiro numero")
let n4 = prompt("Digite seu quarto numero")

if ( n1 < n2 && n3 > n4) {
    console.log("Esta em ordem crescente");

} else{
    console.log ("Os numeros NÃO estão em ordem crescente")
}
    