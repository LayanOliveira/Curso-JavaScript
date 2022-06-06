var num = [1, 4, 6, 9, 5]
console.log(`Nosso vetor é o ${num}`)
num[5] = 7
console.log(num)
num.push(2)
console.log(num)
console.log(num.length)
console.log(`O segundo valor do vetor é ${num[1]}`)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)
for(let pos = 0; pos<num.length; pos++) {
    console.log(num[pos])
}

