let amigo = {nome: 'Jorge',
 sexo: 'M',
 peso: 70.2,
 engordar(p){
    console.log('Engordar')
    this.peso += p
}}
amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}` )