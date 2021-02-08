function verifica(){
    var acorde = document.getElementById('txta')
    var res = document.getElementById('res')

    
    if(acorde.value.length == 0){
        alert('Preencha o campo')
    } else{
    let a = String(acorde.value)
    switch(a){
        case 'C':
            res.innerHTML = `<h2>Campo Harmônico de Do maior` 
            res.innerHTML += `<p><strong>C</strong> - Dm - Em - F - G - Am - Bm7(-5) - C</p>`
            break;
        case 'D':
           res.innerHTML = `<h2>Campo Harmônico de Re maior` 
            res.innerHTML += `<p><strong>D</strong> - Em - F#m - G - A - Bm - C#m7(-5) - D</p>`
            break;
        default:
            alert('Não foi possivel encontrar esse acorde')
         }
    }
}