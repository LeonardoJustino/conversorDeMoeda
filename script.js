const buttonConvert = document.querySelector("button") // botão converter
const input = document.querySelector("input")
const moeda = document.querySelector("select")
var valor
let total
let description = document.querySelector("span")
let result = document.getElementById("result")

// reconhecimento de numeros
input.addEventListener("input", ()=>{
    // VALIDAÇÃO DO INPUT
    const hasCharactersRegex = /\D+/g
    input.value = input.value.replace(hasCharactersRegex, "")
})

buttonConvert.addEventListener("click", (event)=>{
    event.preventDefault()
    if(!input.value || valor === 0) {
       alert("Por favor, insira um valor e selecione uma moeda")
        return;
    }
  total = convertion(valor, input.value)
  addFooter()
  //formatação do dinheiro, daria pra ter feito uma função no lugar
    result.innerHTML =`${Number(total).toLocaleString("pt-BR", {
        style:"currency",
        currency: "BRL",
    }).replace("R$","")} reais`

    if (!moeda.value){
        alert("PREENCHA O CAMPO")
        footer.classList.remove("show-result")
    }
})




// PODERIA TER USADO O SWITCH TAMBÉM
moeda.addEventListener("input", () =>{

        if(moeda.value === "USD"){
            valor = 6.04
            description.innerHTML = `US$ 1 = ${valor}`,
            result.innerHTML =`${total} reais` 
        } 
        else if(moeda.value === "EUR"){
            valor = 6.35
            description.innerHTML = `€ 1 = ${valor}` 
            result.innerHTML = `${total} reais` 
        }
        else if(moeda.value === "GBP"){
           valor = 7.63
           description.innerHTML = `£ 1 = ${valor}` 
           result.innerHTML = ` ${total} reais` 
        }
    })
 
    let convertion = function(valor,input){
        return input*valor
    }


const footer = document.querySelector("footer")

// ativa o footer
let addFooter = function(){
    footer.classList.add("show-result")
}



