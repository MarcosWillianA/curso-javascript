let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()

document.write(`${num}`)
document.write(`O vetor tem ${num.length} posições`)
document.write(`O primeiro valor do vetor é: ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    document.write(`O valor não foi encontrado`)
} else {
    document.write(`O valor está na posição ${pos}`)
}
