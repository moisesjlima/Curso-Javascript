//Alfabeto
console.log('')
let vet = [1,4,6,10,11]
vet.push(12)
console.log(`O seu vetor tem ${vet.length - 1} posições`)
for(let pos in vet){
    console.log(`índice/chave ${pos}, Elemento: ${vet[pos]}`)
    if(vet[pos] % 2 == 0){
        console.log(`O número ${vet[pos]} é Par !`)
    } else{
        console.log(`O número ${vet[pos]} é Impar !`)
    }
    console.log('')
}

