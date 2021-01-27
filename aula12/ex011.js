var idade = 60
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log('Não vota!')
} else if(idade < 18){
    console.log('Voto opcional!')   
} else if(idade <= 60){
    console.log('Voto obrigatório!')
} else if(idade > 60){
        console.log('opcional')
}