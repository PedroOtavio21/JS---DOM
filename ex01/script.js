/*
### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/

const playersList = document.getElementById('players')

function addPlayer(){
    const name = document.getElementById('name').value
    const position = document.getElementById('position').value
    const number = document.getElementById('number').value

    // console.log(`Variáveis encontradas: Nome - ${name}, Posição - ${position}, Número - ${number}`)

    const confirma = confirm(`Deseja escalar o jogador ${name} como ${position}?`)

    if(confirma){
        const playerItem = document.createElement('li')
        playerItem.innerText = `${position} - ${name} (${number});`
        playerItem.id = `player-${number}`

        playersList.appendChild(playerItem)

        document.getElementById('name').value = ''
        document.getElementById('position').value = ''
        document.getElementById('number').value = ''

        alert('Jogador escalado com sucesso!')
    } else {
        alert(`O jogador ${name} foi deixado de lado na escalação.`)
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById(`player-${number}`)

    const confirma = confirm(`Deseja remover ${playerToRemove.innerText}?`)
    if(confirma){
        playersList.removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}