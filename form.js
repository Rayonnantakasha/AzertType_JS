let form = document.querySelector("form")
let baliseNom = document.getElementById('nom')

function verifierChamp(balise) {
    if (balise.value === "") {
        balise.classList.add('error')
    } else{
        balise.classList.remove('error')
    }
}

form.addEventListener("submit", () =>{
    event.preventDefault()
    verifierChamp(baliseNom)
    console.log(baliseNom.value)
})