function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = "Impossível contar!!!"
    } else 
        {
            res.innerHTML = `<p style="color:  rgb(226, 139, 77);">Contando...</p>`
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if(p <= 0){
                alert('Passo invalido! considerando passo 1')
                p = 1
            }
            if(i < f){
                //Contagem Progressiva
                for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
                }
            } else{
                //Contagem regressiva
                for(let c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449} ` 
                }
            res.innerHTML += `\u{1F3C1}`
            }
        }
            
        

    