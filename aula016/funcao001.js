function parimpar(n) {
    if (n%2 == 0) { 
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parimpar(223)
window.document.write(`O número é ${res}`)