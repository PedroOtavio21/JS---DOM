const input = document.getElementById("input")

document.getElementById('value').addEventListener('click', () => {
    input.value = input.value === '' ? 'Olá, Mundo!' : ''
    
    console.log(input.value) // Pega o valor em tempo real
    console.log(input.getAttribute('value')) // Pega o valor pré definido no Documento html
})

document.getElementById('type').addEventListener('click', () => {
    input.type = input.type !== 'radio' ? 'radio' : 'text'
    // input.setAttribute('type', 'radio') 
})

document.getElementById('placeholder').addEventListener('click', () => {
    input.placeholder = 'Digite algo ...'
})

// Desabilita o input
document.getElementById('disable').addEventListener('click', () => {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', () => {
    const data = input.dataset.something 
    console.log(`O valor de data-something eh ${data}`)
    input.dataset.something = 'Algum outro valor'
    console.log(`O valor de data-something eh ${input.dataset.something}`)
})