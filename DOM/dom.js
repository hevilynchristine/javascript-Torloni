//DOM é a arvore/fluxo do meu document HTML
// Ele serve para que o JS consiga manipular  (Visualizar, editar, criar e excluir)
// o DOM ele torna os elementos HTML em objetos para que o JS consiga acessar de fato


// let elementoBody = document.getElementsByTagName("body");

// console.log(elementoBody);

//acessar pela tag h1

// let elementoH1 = document.getElementsByTagName("h1");

//acessando o elelento sobre a sua posição


// elementoH1[0].textContent = "Pera";

// console.log();


//exibe o id tecnica
let exibeId = document.getElementById ("tecnica");
console.log(tecnica);

//exibe os elementos que possuem a class jogador
let exibeclass = document.getElementsByClassName ("jogador");
console.log(exibeclass);

//exibe o item 4 dos elementos que possuem a class jogador
console.log(exibeclass[3]);

//muda o texto do conteudo do item da 3 posicao dos elementos que possuem a class jogador
exibeclass[3].textContent = "Macarrão"

//mudar estilizacao de um elemento
exibeId.style.color = "red";
exibeId.style.fontSize = "20px";

//mude a cor a cor da fonte do item da 3 posiçao dos elementos que possuem a class jogador
exibeclass[3].style.color = "red";








