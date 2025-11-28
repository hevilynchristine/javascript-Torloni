//1
function conferirSequencia() {
    window.alert("Digite três números")

let n1 = parseFloat(prompt("Digite seu primeira número "))

let n2 = parseFloat(prompt("Digite seu segunda número "))

let n3 = parseFloat(prompt("Digite seu terceira número "))

if (n1 < n2 && n2 < n3) {
    alert("Os números estão em ordem crescente.");
}

if (n1 > n2 && n2 >n3) {
    alert("Os números estão em ordem decrescente.");
}

else if (n1 <= n2 && n2 >= n3) {
    alert("Os números estão aleatórios")
}
}

//2 
function exibirTabuadaEscolhida() {
    
    let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada"));


    console.log(`======TABUADA ${tabuadaEscolhida} =====`);

    for (let i = 1; i <= 10; i++) {
        //    2 X 4 = ?
        console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
    }
}
// chama minha função
exibirTabuadaEscolhida();

//3 
function exibindoNomeSolicitado () {
    function exibirNomeSolicitado() {
 let nomeSolicitado = prompt ("Digite seu nome");

     return nomeSolicitado;  

}

let nome = exibirNomeSolicitado();

alert(nome);


// com parametros
function somarDoisNumeros(numero1, numero2) {
    console.log (numero1+numero2);
}

// passando valores via parametro
somarDoisNumeros(10, 10);
}

//4
function diasdasemana(params) {
    let semana = prompt("Digite um número de 1 a 7: ")

switch (semana) {
    case "1":
        console.log("Segunda-feira")
        break;

    case "2":
        console.log("Terça-feira")
        break;

    case "3":
        console.log("Quarta-feira")
        break;

    case "4":
        console.log("Quinta-feira")
        break;

    case "5":
        console.log("Sexta-feira")
        break;

    case "6":
        console.log("Sábado")
        break;

    case "7":
        console.log("Domingo")
        break;

    default:
        console.log("Número inválido")
        break;
}
}
//5
function valorcompra() {
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
}
