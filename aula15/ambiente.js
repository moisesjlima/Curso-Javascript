function sortf(a,b){
    return (a-b)
}
let num = [5, 4, 3, 7]
num.sort(sortf)
num.push(8)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O Terceiro elemento do vetor é ${num[2]}`)
var c = 0
/*while(c <= 4){
    console.log(`Elemento na ${c} posição do vetor: ${num[c]}`)
    c++
}
}*/
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}
