// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

// =====TABUADA======


let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada"));

// 1 numero dentro da condicao do for - ninicializacao - variavel
// 2 numero dentro da condicao do for - condicao - verifica a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas
// i++ = i = i+1
 
console.log(`======TABUADA ${tabuadaEscolhida} =====`);
for(let i = 1; i <=10; i++ ){
    //    2 X 4 = ?
    console.log(tabuadaEscolhida +  " X " + i + " = " + (tabuadaEscolhida * i));
}