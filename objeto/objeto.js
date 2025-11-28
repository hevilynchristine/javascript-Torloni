// let mercedes = {
//     modelo: "G63", //caracteristicas - propriedades
//     ano: 2025,
//     fabricante: "mercedes",
//     cor: "preto fosco",
//     acelerar(){
//         console.log("Acelerando...vrum...vrum...");
//     },
//     freiar() {
//         console.log("Freiando....");
//     }
// };

// console.log(mercedes.modelo);
// console.log(mercedes.acelerar());

//Criar um objeto professor Tadeu ou o Jonas
// 3 propriedades nome, NIF, salario
// 2 comportamentos atribuir nota e baterponto
// Além disso escolha mais uma prorpiedade e mais um comportamento


let ProfessorTadeu = {
 nome: "Felipe Tadeu",
 NFI: 567891011,
 salario: 5.0000,
 dataNasc: new Date(1998, 2, 30),
 hobbies: ["Programar", "jogar"],

 atribuirNota(){ },
 baterPonto(){
     let horarioBatido = new Date(2025, 10, 28, 17, 5);

     console.log(horarioBatido)
 }
};

console.log(ProfessorTadeu.hobbies);
console.log(ProfessorTadeu.dataNasc);
console.log(ProfessorTadeu.baterPonto());