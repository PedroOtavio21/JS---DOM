// Variáveis principais para manutenção de código javascript
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Adiciona um evento para cada botão clicado pelo usuário, informando o valor no input
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// Adiciona um evento de "Limpa" nos valores presentes no input
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus()
})

// Realiza a função "calculate()" ao ativar o evento no botão "equal"
document.getElementById("equal").addEventListener("click", calculate)

// Verificação de Teclas inseridas em input e funcionamento de "Backspace" e "Enter" do teclado
input.addEventListener("keydown", function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculate()
  }
})

// Avalia o código javascript inserido em "input" e mostra o resultado do cálculo em "resultInput"
function calculate() {
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  const result = eval(input.value) // A avaliação ocorre aqui, porém CUIDADO ao executar esta função!
  resultInput.value = result
  resultInput.classList.remove("error")
}

// Copia o valor de resultInput para a área de transferência, além de adicionar um visual para o botão.
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget
  if (button.innerText === "Copy") {
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
  } else {
    button.innerText = "Copy"
    button.classList.remove("success")
  }
})

// Código responsável para "troca de temas" da página
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})