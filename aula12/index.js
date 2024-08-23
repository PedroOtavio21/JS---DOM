/**
 * A ideia da aula consiste em trabalhar com dados de um formulário no prórpio JavaScript, fazendo 
 * com que os dados não sejam perdidos ao ativar o evento padrão de um button "submit" no html
 */

const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    // Previne o comportamento padrão do submit, permitindo exibir os dados no console!
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach((item) => {
        salad += ' - ' + item.value
    })

    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salad
    })

    alert(
        `Pedido realizado!
        Nome do cliente: ${name}
        Endereço: ${address}
        Tipo de pão: ${breadType}
        Recheio: ${main} 
        ${salad}
        Observações: ${observations}`
    )
})