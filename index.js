const main = document.querySelector(`main`)
const root = document.querySelector(`:root`)
const input = document.getElementById(`input`)
const resultInput = document.getElementById(`result`)


const allawedKeys = [ "(" , ")" ,"/","*","-","+","9","8","7","6","5","4","3","2","1","0",".","%"," " ]

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


document.getElementById(`equal`).addEventListener(`click`,calculate)

function calculate(){
        const resultado = eval(input)
}