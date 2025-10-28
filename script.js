function returnMessageScore(score,nombreMotsMax) {
    let message = "Votre score est de " + score + " sur " + nombreMotsMax
    return message
}

let returnMessage = returnMessageScore(5,10)
console.log(returnMessage)

