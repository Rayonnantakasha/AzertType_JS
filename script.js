const litMots = ["Cachalot", "Pétunia", "Serviette"]
const listPhrases = ["La vie", "l/'univers et le reste", "Merci pour le poisson"]
let score = 0
let choix = prompt("Voulez-vous taper des mots ou des phrases ?")

while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Voulez-vous taper des mots ou des phrases ?")
}

if (choix === "mots") {
    for (let i = 0; i < litMots.length; i++) {
        let motUtilisateur = prompt("Entrer votre mot " + litMots[i])
        if (motUtilisateur === litMots[i]) {
            score++
        }
    }
    alert("Votre score est de " + score + " sur " + litMots.length)
}

if (choix === "phrases") {
    for (let i = 0; i < listPhrases.length; i++) {
        let phraseUtilisateur = prompt("Entrer votre phrase " + listPhrases[i])
        if (phraseUtilisateur === listPhrases[i]) {
            score++
        }
    }
    alert("Votre score est de " + score + " sur " + listPhrases.length)
}

/*
for (let i = 0; i < litMots.length; i++) {
    let motUtilisateur = prompt("Entrer votre mot " + litMots[i])
    if (motUtilisateur === litMots[i]) {
        score++
    }
}
alert("Votre score est de " + score)
*/
