//Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1;  //variavel iniciadora
let soma = 0;

//condicao
while (numero <=100) {
    soma = soma + numero; //ja somando os numeros
    numero++; //incremento de cada volta
}

alert("A soma dos numeros de 1 a 100 é: " + soma);