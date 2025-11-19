// window.alert("Minha primeira menssagem!")

// window.confirm("Hoje é sexta?")

//comentario em linha

/*
comentando Varias Linha 
*/

// let nome = window.prompt("Qual é o seu nome?")

// window.alert("Bem vindo (a)!" + nome)

// console.log("Apresenta a menssagem na tela")

// let numero01 = parseInt(prompt("Digite o primeiro numero: "))

// let numero02 = parseInt(prompt("Digite o segundo numero: "))

// let soma = numero01 + numero02

// console.log (soma)

// let num01 = parseFloat(prompt("Digite algum numero: "))

// let num02 = parseFloat(prompt("Digite algum numero: "))

// let resultado = num01 + num02

// console.log(resultado)

// let idade = parseInt(prompt("Qual é sua idade"))

// if (idade >= 18) {
//     console. log("Você é maior de idade, da-lheee")
// }
// else{
//     console. log("Você é menor de idade, Baixinho")
// }

let estacoes = prompt("Digite uma estaçao do ano")

switch (estacoes) {
    case "Verão":
        console.log("Muito calor e praia")
        break;

    case "Outono":
        console.log("As folhas caem no final")
        break;

    case "Inverno":
        console.log("Esta muito frio")
        break;

    case "Primavera":
        console.log("Eu vejo flores em você...")
        break;
    default:
        console.log("Não existe essa estação!!!")
        break;
}