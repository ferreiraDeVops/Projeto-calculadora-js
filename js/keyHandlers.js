import calculate from "./calculate.js"

const input = document.querySelector(`#input`)
// ADICIONANDO FUNCIONALIDADE DO BOTÃO = 
export function handleButtonPress(ev){ // adicionando o evento click no evento parametro charkeybtn 
        const value = ev.currentTarget.dataset.value
        input.value += value
}

// ADICIONANDO O ELEMENTO DE LIMPAR INPUT
export function handleClearInput(clear){
        input.value = ""
        input.focus()
}

// ADICIONANDO OS BOTÕES PARA ADICIONAR OS ELEMENTOS CLICADOS AO INPUT
export function handleTyping(ev){ // seleciona o input adiciona um evento de teclado keydown 
        ev.preventDefault()  // para o comportamento padrão da pagina
        const allawedKeys = [ "(" , ")" ,"/","*","-","+","9","8","7","6","5","4","3","2","1","0",".","%"," " ]
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
}