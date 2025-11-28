// function exibirTabuadaEscolhida() {
    
//     let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada"));


//     console.log(`======TABUADA ${tabuadaEscolhida} =====`);

//     for (let i = 1; i <= 10; i++) {
//         //    2 X 4 = ?
//         console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
//     }
// }



// // chama minha função
// exibirTabuadaEscolhida();

// //crie uma função para que solicite o nome da pessoa e exiba-o 
// function exibirNomeSolicitado() {
//  let nomeSolicitado = prompt ("Digite seu nome");

//      return nomeSolicitado;  

// }

// let nome = exibirNomeSolicitado();

// alert(nome);


// // com parametros
// function somarDoisNumeros(numero1, numero2) {
//     console.log (numero1+numero2);
// }

// passando valores via parametro
// somarDoisNumeros(10, 10);

// crie função para exercicio 08 de estrutura condicional
// passe via parametro o peso e a altura.

// 1 coisa a se fazer - criar a estrutura da função com os seus devidos parametros
// 2 coisa - copiar o codigo do IMC
// 3 coisa - colar o codigo do IMC dentro da função 
// 4 coisa chamar a função e atribuir  peso e altura


function calculoIMC(peso, altura) {



let imc = peso / (altura * altura);


if (imc < 18.5) {
    alert("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert ("Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
    alert ("Sobrepeso");
} else if (imc >= 30.0 && imc <= 34.9) {
    alert ("Obesidade grau 1");
} else if (imc >= 35.0 && imc <= 39.9) {
    alert ("Obesidade grau 2");
} else {
    alert ("Obesidade grau 3. se cuide por favor, sua vida ta em risco ");
}
    
}
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

calculoIMC(peso, altura);




