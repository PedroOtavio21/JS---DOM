// Armazenamento de Dados pelo navegador

/** SessionStorage
 * Escrita
 * -    sessionStorage.setInfo("nomeDeChave", valorDesejado)
 * Leitura
 * -    const valorDesejado = sessionStorage.getItem("nomeDeChave")
 */

document.getElementById('sessionBtn').addEventListener('click',()=>{
    const input = document.getElementById('session').value
    window.sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click',()=>{
    const info = sessionStorage.getItem('info')
    alert(`A informação inserida em SessionStorage é ${info}`)
})

/** LocalStorage
 * Escrita
 * -    localStorage.setInfo("nomeDeChave", valorDesejado)
 * Leitura
 * -    const valorDesejado = localStorage.getItem("nomeDeChave")
 */

document.getElementById('localBtn').addEventListener('click',()=>{
    const text = document.getElementById('local')
    localStorage.setItem('text', text.value)
    text.value = ''
})

document.getElementById('readLocal').addEventListener('click',()=>{
    const text = localStorage.getItem('text')
    alert(`A informação inserida em LocalStorage é ${text}`)
})

/**Cookies 
 * Escrita
 * -    cookieName=value; expires=UTCStringDate; path=/; (Sempre um ´;´ após a escrita de variável)
 * -    document.cookie = cookieName + expires + path
*/

document.getElementById('cookieBtn').addEventListener('click',()=>{
    const input = document.getElementById('cookie')
    const cookieName = `info=${input.value};`
    const expiration = `expires=${2024,8,2};`
    const path = `path=/;`
    document.cookie = cookieName + expiration + path
    input.value = ''
    console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', ()=>{
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ';'
    const expiration = `expires=${2024,8,14};`
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})