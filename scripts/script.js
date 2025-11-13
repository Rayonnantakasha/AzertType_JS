
/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}


function afficherProposition (proposition) {
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition 
}


/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations

    let score = 0
    let i = 0 // Ce compteur remplace le nbMotsProposer
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")

    //on fait appel à la fonction qui affiche les mots du jeu
     afficherProposition(listeProposition[i])

    // on ajoute un évenement sur le bouton de validation
    btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value)

    //on compare le mot du user et celui de l'application et augmente le score
    if (inputEcriture.value === listeProposition[i]) {
        score++
    }
    i++ // le compteur de nbMotsProposer augmente aussi

    afficherResultat(score, i) // on affiche au préalable le resultat

    inputEcriture.value =" " //vider l zone de saiser après avoir cliquer sur le bouton valider

    //ici on crée une condition pour que le mot undefined ne s'affiche pasd
    if (listeProposition[i] === undefined) {
        afficherProposition("Le jeu est fini")
        btnValiderMot.disabled = true
    }else{
        afficherProposition(listeProposition[i])
    }

    })

    let listsBtnRadio = document.querySelectorAll(".optionSource input") // recuperation des boutons radio

    //boucle pour parcourir chaque bouton
    for(let index = 0; index < listsBtnRadio.length; index++  ){
        listsBtnRadio[index].addEventListener("change", (event) => {
           console.log(event.target.value)
            if (event.target.value === "1") {
            listeProposition = listeMots
        } else{
           listeProposition = listePhrases 
        }
        afficherProposition(listeProposition[i])
        })
       
    }

    //on affiche le résultat final
    afficherResultat(score, i)
}

