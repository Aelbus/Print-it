// Tableau Carrousel
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
  ];
  
// fleche suivant/precedent
const left_arrow = document.querySelector('.arrow_left');
const right_arrow = document.querySelector('.arrow_right');

// Conteneur dots
const dots_div = document.querySelector('.dots');

// Image et texte
const imagePicture = document.querySelector('.banner-img');
const text = document.querySelector('p');
  
// Event click fleche suivant/precedent
left_arrow.addEventListener('click', silde_back);
right_arrow.addEventListener('click', slide_next);
  
// Creation dot conteneur correspondant
for (let i = 0; i < slides.length; i += 1) {
const dot = document.createElement('div');
dot.className = 'dot';
dots_div.appendChild(dot);
dot.addEventListener('click', () => {carrousel_update(count, i)});
}

// Sélection points de navigation
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');

// Initialisation du compteur
let count = 0;

// Fonction precedent
function slide_next() {
const count_add = count < slides.length - 1 ? count + 1 : 0;
carrousel_update(count, count_add);
}

// Fonction suivant
function silde_back() {
const count_add = count === 0 ? slides.length - 1 : count - 1;
carrousel_update(count, count_add);
}

// Update carrousel
function carrousel_update(old_count, count_add) {
count = count_add;
dots[old_count].classList.remove('dot_selected');
imagePicture.src = './assets/images/slideshow/' + slides[count_add].image;
text.innerHTML = slides[count_add].tagLine;
dots[count_add].classList.add('dot_selected');
}
  