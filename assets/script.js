// Tableau carrousel pour chaque slide
const slides = [
	{
	  "image":"slide1.jpg",
	  "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image":"slide2.jpg",
	  "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image":"slide3.jpg",
	  "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image":"slide4.png",
	  "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Fleche Gauche/Droite
const left_arrow = document.querySelector(".arrow_left")
const right_arrow = document.querySelector(".arrow_right")

// Division des dots
const dots_div = document.querySelector(".dots")

// Image et texte slide carrousel
const slide_img = document.querySelector(".banner-img")
const slide_p = document.querySelector("p")

// Evenement auc Clique des fléches
left_arrow.addEventListener("click", silde_back) // appelle la fonction correspondante à chaque fleche (slide back/slide next)
right_arrow.addEventListener("click", slide_next)

// Boucle qui crée les dots ("i" est une variable choisie par convention pour représenter l'indice ou l'index d'un élément dans un tableau)
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div") // crée un point de navigatioçn "dot"
	dot.className = "dot" // applique les proprieter CSS au "dot"
	dots_div.appendChild(dot) // ajoute le dot a la div conteneur des dot dans le HTML en tant que enfant 
	dot.addEventListener('click', () => { carrousel_update (count, i) } ) // fait appelle à la fonction carrousel update pour rendre les dots cliquable

}
// _________________EXPLICATION DE LA BOUCLE (condition)
// "let i" : crée une variable appelée "i" en utilisant le mot-clé let. 
// "i = 0" : affecte la valeur 0 à la variable i en tant qu'initialisation de la boucle.
// "i < slides.length" : vérifie si la variable "i" est inférieure à la longueur de la variable "slides" 
// "i++" : est un raccourci pour ajouter 1 à la valeur de "i" à chaque itération de la boucle. 

// Sélection points de navigation
const dots = document.querySelectorAll(".dot")
dots[0].classList.add("dot_selected")

// Variable pour suivre l'index des slide du carrousel
let count = 0
//  fonction changement de slide carrousel
function carrousel_update(old_count, count_add) {
	count = count_add
	dots[old_count].classList.remove("dot_selected")
	slide_img.src = "./assets/images/slideshow/" + slides[count_add].image
	slide_p.innerHTML = slides[count_add].tagLine
	dots[count_add].classList.add("dot_selected")
}

// Fonction precedent
function slide_next() {
	let count_add;
	if (count < slides.length - 1) {
  	count_add = count + 1;
	} 
	else {
  	count_add = 0;
	}
	carrousel_update(count, count_add)
}
// Fonction suivant
function silde_back() {
	let count_add;
	if (count === 0) {
  	count_add = slides.length - 1;
	} 
	else {
	count_add = count - 1;
	}
	carrousel_update(count, count_add)
}