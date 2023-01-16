import  calculate  from "./calculate.js"
import copyToClipBoard from "./copyToClipBoard.js"
import { handleButtonPress, handleClearInput, handleTyping } from "./keyHandlers.js"
import themeSwitcher from "./themeSwitcher.js"
document.querySelectorAll(`.charKey`).forEach(function(charKeyBtn){// Selecionar o elemento .class percorrendo todos elementos usando o foreach passando uma função e um valor de callback como parametro
        charKeyBtn.addEventListener(`click`,handleButtonPress)
})
document.getElementById(`input`).addEventListener(`keydown`,handleTyping)
document.getElementById(`clear`).addEventListener(`click`, handleClearInput)
document.getElementById(`equal`).addEventListener(`click`, calculate)
document.getElementById(`themeSwitcher`).addEventListener(`click`,themeSwitcher)
document.getElementById(`copyToClipboard`).addEventListener(`click`,copyToClipBoard)






















/*
input.addEventListener(`keydown`,function(ev){
        ev.preventDefault()
        if (allawedKeys.includes(ev.key)) {// verifica se a tecla clicada do ev é esta dentro do array
                input.value += ev.key // se ela estiver no array a tecla clicada e adicionada ao input da calculadora
                return
        }
        if (ev.key === `Backspace`) { // se o botão clicado for igual a tecla string backspace então
                input.value = input.value.slice(0, -1) // utiliza o metodo slice(para cortar do item 0, pegando do final -1 tirando 1 numero)
        }
        if (ev.key === `Enter`) {
                calculate()
        }
})
document.getElementById(`clear`).addEventListener(`click`,function(clear){
        input.value = ""
        input.focus()
})
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {//aqui o callback e passado para uma variavel  usando o atributo dataset utilizando o segundo valor do atributo seu value
        charKeyBtn.addEventListener("click", function () {
          const value = charKeyBtn.dataset.value   // Aqui o value e concatenado com a variavel criada acima
          input.value += value      // seleciona o botão clicado bota na variavel charKeyBtn
        })
})
document.getElementById(`equal`).addEventListener(`click`,calculate)
function calculate(){
        const result = eval(input.value)
        resultInput.value = result
}*/