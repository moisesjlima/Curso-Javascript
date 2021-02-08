let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
} 

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return false
    } else {
        return true
    }
}

function add(){
    if(isNumero(num.value) && inLista(num.value, valores)){
        valores.push(Number(num.value))  
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ' '
    } else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finish(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
 
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> elementos cadastrados</p>`
        res.innerHTML += `<p>O maior número digitado foi <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menos número digitado foi <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`
        


    }
}
