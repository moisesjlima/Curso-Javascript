function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('div#img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} Horas`
    
    if(hora >= 0 && hora < 12){
        img.innerHTML = '<img src="day.png">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#b9846f'
    } else {
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#515154'
    }
    }
