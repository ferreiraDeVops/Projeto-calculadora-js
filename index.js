const main = document.querySelector(`main`)
const root = document.querySelector(`:root`)
const input = document.getElementById(`input`)
const resultInput = document.getElementById(`result`)


const allawedKeys = [ "(" , ")" ,"/","*","-","+","9","8","7","6","5","4","3","2","1","0",".","%"," " ]


input.addEventListener(`keydown`, function(ev){ // seleciona o input adiciona um evento de teclado keydown 
        ev.preventDefault()  // para o comportamento padrão da pagina
        
        // ADICIONANDO OS CARACTERES VALIDOS COLOCADOS NO ARRAY PELO TECLADO
        
        if (allawedKeys.includes(ev.key)){     // se o caracter estiver em allwedKeys estiver incluso no evento keydown
                input.value += ev.key        // concatene o resultado do ev.key no input.value 
                return
        }
        
        // ADICIONANDO O BOTÃO DE APAGAR DO INPUT

        if (ev.key === `Backspace`){    // se elemento clicado for corespondente ao backspace 
                input.value = input.value.slice(0, -1) // input deve ser fatiado pelo slice começando do elemento zero partindo para o final do input -1
                
        }
        
        // ADICIONANDO O ELEMENTO ENTER DA CALCULADORA

        if (ev.key === `Enter`){
                calculate()
        }
})

// ADICIONANDO O ELEMENTO DE LIMPAR INPUT
document.getElementById(`clear`).addEventListener(`click`, function(clear){
        input.value = ""
        input.focus()
})

// ADICIONANDO OS BOTÕES PARA ADICIONAR OS ELEMENTOS CLICADOS AO INPUT

document.querySelectorAll(`.charKey`).forEach(function(charKeyBtn){// Selecionar o elemento .class percorrendo todos elementos usando o foreach passando uma função e um valor de callback como parametro
        charKeyBtn.addEventListener(`click`,function(){ // adicionando o evento click no evento parametro charkeybtn 
                const value = charKeyBtn.dataset.value
                input.value += value
        })
})


document.getElementById(`equal`).addEventListener(`click`, calculate)

function calculate(){
        const result =eval(input.value)
        resultInput.value = result
}



// TEMA DA CALCULADORA

document.getElementById(`themeSwitcher`).addEventListener(`click`,function(){
        if (main.dataset.theme === `dark`){
                root.style.setProperty(`--bg-color`, `#f1f5f9`)
                root.style.setProperty(`--border-color`, `#aaa`)
                root.style.setProperty(`--font-color`, `#212529`)
                root.style.setProperty(`--primary-color`, `#26834a`)
                main.dataset.theme = `light`
        }
        else{
                root.style.setProperty(`--bg-color`, `#212529`)
                root.style.setProperty(`--border-color`, `#666`)
                root.style.setProperty( `--font-color`, `#f1f5f9`)
                root.style.setProperty(`--primary-color`, `#4dff91`)
                main.dataset.theme = `dark`
        }
})






















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