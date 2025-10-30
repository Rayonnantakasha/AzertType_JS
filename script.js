
//fonction pour afficher les resultats
function afficherResultat(score,nombreMotsProposer) {
    return console.log("Votre resultat est de " + score + " sur " + nombreMotsProposer)
}

//fonction pour choisir entre phrases ou mots
function choisirPhrasesOuMots() {
    let choix = prompt("Voulez-vous jouer avec des phrases ou des mots ?")
    while (choix !== "phrases" && choix !== "mots") {
        choix = prompt("Veuillez choisir entre phrases ou mots")
    }
    return choix
}

//fonction pour lancer la boucle de jeu
function lancerBoucleDeJeu(listePropositions) {
    let score = 0
   for(let i = 0; i<listePropositions.length; i++) {
    let motUtlisateur =prompt("Entrez le mot suivant : " + listePropositions[i])
    if (motUtlisateur === listePropositions[i]) {
        score++
    }
   }
    return score
}

//fonction pour lancer le jeu
function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreMotsProposer = 0
    if (choix === "mots") {
       score = lancerBoucleDeJeu(listeMots)
        nombreMotsProposer = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nombreMotsProposer = listePhrases.length
    }
    afficherResultat(score, nombreMotsProposer)
}
