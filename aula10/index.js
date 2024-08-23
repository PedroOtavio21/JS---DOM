function register(element) {
    // A partir do elemento pai passado, é possível acessar os elementos filhos com seus respectivos valores
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    console.log({username, password, passwordConfirmation})

    if(password == passwordConfirmation){
        alert(`Usuário ${username} registrado com sucesso!`)
    } else {
        alert(`As senhas se diferem! ${password} != ${passwordConfirmation}`)
    }
}