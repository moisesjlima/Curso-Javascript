function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value <1900 || fano.value > ano){
        alert('[Erro] - Verifique os dados')
    } else {
        var sex = document.querySelector('input.radsex')
        var idade = ano - Number(fano.value)
        var radius = document.querySelectorAll("input[type='radio']")
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (radius[0].checked){
            gen = 'Masculino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21){
                //Jovem 
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }

        } else if (radius[1].checked) {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21){
                //Jovem 
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado: ${idade} anos e gênero: ${gen}`
        res.appendChild(img)
        

    }

}