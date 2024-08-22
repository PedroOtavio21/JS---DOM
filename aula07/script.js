function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    // Criação de Nome li e input
    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    // Criação de Telefone li e input
    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    // Criação de Endereço li e input 
    const addresssLi = document.createElement('li')
    addresssLi.innerHTML = '<label for="address">Endereço: </label>'
    const addresssInput = document.createElement('input')
    addresssInput.type = 'text'
    addresssInput.id = 'address'
    addresssInput.name = 'address'
    addresssLi.appendChild(addresssInput)
    ul.appendChild(addresssLi)
    ul.appendChild(document.createElement('br')) 

    // Adiciona elementos na página html
    contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    // Removo o último contato da lista de contatos.
    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}