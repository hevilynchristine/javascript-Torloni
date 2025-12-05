//eventos sao interações do usuario com o website e tambèm,
//comportamentos do website,por exemplo carregar a tela

let elementoBtn = document.getElementById("btn");
let elementoIdLeandra = document.getElementById("tecnica");
let novoElemento = document.createElement("a");
novoElemento.textContent = "FAZENDINHA| MUNDO BITA";
novoElemento.href = "https://www.youtube.com/watch?v=cjONzZPJONc&list=RDcjONzZPJONc&start_radio=1";

elementoBtn.addEventListener("click", () => {
//   alert("Você clicou no botão");

    //  elementoBtn.style.backgroundColor = "purple";
       
    document.body.appendChild(novoElemento);
    // document.body.removeChild(elementoIdLeandra);
    // console.log(document.body.children);

    document.body.children[2].removeChild(elementoIdLeandra)

})