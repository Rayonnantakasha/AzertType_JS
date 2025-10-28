const litMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

for (let i = 0; i<litMots.length; i++) {
    let motUtilisateur = prompt("Entrer votre mot " + litMots[i])
    if (motUtilisateur === litMots[i]) {
        score++
    }
}
alert("Votre score est de " + score)