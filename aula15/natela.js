function sortf(a,b){
    return(a - b)
}
let valores = [0, 4, 3, 6, 9, 12]
valores.sort(sortf);
console.log('Elementos dentro do vetor')
/*for(let pos = 0; pos < valores.length; pos++){
    console.log(`${pos}° Posição no vetor: ${valores[pos]}`)}*/

for(let pos in valores){
    console.log(`${pos}° Posição no vetor: ${valores[pos]}`)
}