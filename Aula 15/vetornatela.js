// let valores = [8, 1, 7, 4, 2, 9]

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A Pósição ${pos} tem o valor ${valores[pos]}`)
// }

var num = [1,3,5,7,9,11]

for(let posi in num){
    console.log(num[posi])
}

console.log(num.indexOf(7))
console.log(num.indexOf(12)) // vai retornar -1 pois 12 não existe na(o) lista (array/vetor)
let posi = num.indexOf(12)
    if (posi == -1){
        console.log(`O Valor não foi encontrado`)
    } else {
        console.log(`O valor está na posição ${posi}`)
    }