export default function calculate(){
        const resultInput = document.querySelector(`#result`)
        resultInput.value = "ERROR"     
        resultInput.classList.add(`error`)
        // ADICIONANDO A FUNÇÃO DE CALCULO USANDO EVAL()
        const result = eval(input.value)
        resultInput.value = result
        resultInput.classList.remove(`error`)
}