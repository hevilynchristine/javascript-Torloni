// let nome = window.prompt("Qual é o seu nome?")
// window.alert("Bem vindo (a)" + nome)


// let senha = window.prompt("Qual a sua senha")

let login = prompt("Qual seu nome? ")

switch (login) {
    case "Admin":
        console.log ("Nome correto ")
        break;

    default:
        console.log ("Nome errado! ")
        break;
}

 let senha = prompt("Qual sua senha?")

  switch (senha) {
    case "senha123":
        console.log ("Senha correta")
        break;
  
    default:
        console.log ("Senha incorreta")
        break;
  }
