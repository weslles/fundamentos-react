function gerarNumeros(min, max, qtde) {
    let numb = []
    let i = 0
    let aux
    while (i < qtde) {

        aux = Math.floor(Math.random() * (max+1 - min) + min)
        if (numb.length == 0) {
            numb.push(aux)
        } else {
            for (let j = 0; j < numb.length; j++) {
                if (aux == numb[j]) {
                    aux = Math.floor(Math.random() * (max+1 - min) + min)
                    j = -1
                }
            }
            numb.push(aux)
        }
        i++
    }
    
    return numb
}

console.log(gerarNumeros(1,60,6).sort((n1, n2) => n1-n2).join("-"))

