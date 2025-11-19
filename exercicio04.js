// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let n1 = parseInt(prompt("Digite sua primeira nota "))

let n2 = parseInt(prompt("Digite sua segunda nota "))

let n3 = parseInt(prompt("Digite sua terceira nota "))

let n4 = parseInt(prompt("Digite sua quarta nota "))

let soma = (n1 + n2 + n3 + n4) / 4;

console.log(soma)

if (soma >= 7.0) {
    console.log("APROVADO");

} else if (soma >= 5.0) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("REPROVADO");
}


