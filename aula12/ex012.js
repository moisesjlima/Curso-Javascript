var agora = new Date()
var horas = agora.getHours() //Pegar a hora atual
console.log(`Agora são exatamente ${horas} horas`)
if (horas < 12){
    console.log('Bom Dia!')
} else if (horas <=18){
    console.log('Boa Tarde!!')
} else if(horas <=24) {
    console.log('Boa Noite!!!')
} else{
    console.log('Boa madrugada')
} 