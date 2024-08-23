// Lê os valores presentes em elementos filhos de um elemento pai e realiza uma verificação
function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode 
    // ev.currentTarget = this
    // ev.currentTarget.parentNode = elemento pai (section)
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
  
    if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
    } else {
      alert("As senhas não conferem")
    }
}
  
// Função dedicada para remoção do evento "register", o removendo e mantendo o "mouseOver"
function removeEvent() {
    button.removeEventListener("click", register)
    alert("Event Removed")
}

// Adicionando um elemento a partir de seu id
const button = document.getElementById("register-button")

// Adicionando um evento ao elemento pego do DOM
button.addEventListener("click", register)

// Adiciona um outro evento ao botão pego no DOM
button.addEventListener("mouseover", function (ev) {
    console.log(ev)
})