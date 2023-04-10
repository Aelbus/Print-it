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
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Conteneur dots
const containerDots = document.querySelector('.dots');

// Image et texte
const imagePicture = document.querySelector('.banner-img');
const text = document.querySelector('p');
  
// Event click fleche suivant/precedent
arrowLeft.addEventListener('click', prevSlide);
arrowRight.addEventListener('click', nextSlide);
  
// Creation dot conteneur correspondant
for (let i = 0; i < slides.length; i += 1) {
const dot = document.createElement('div');
dot.className = 'dot';
containerDots.appendChild(dot);
dot.addEventListener('click', () => {updateCarrouselUI(counter, i)});
}

// Sélection points de navigation
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');

// Initialisation du compteur
let counter = 0;

// Fonction precedent
function nextSlide() {
const newCounter = counter < slides.length - 1 ? counter + 1 : 0;
updateCarrouselUI(counter, newCounter);
}

// Fonction suivant
function prevSlide() {
const newCounter = counter === 0 ? slides.length - 1 : counter - 1;
updateCarrouselUI(counter, newCounter);
}

// Update carrousel
function updateCarrouselUI(oldCounter, newCounter) {
counter = newCounter;
dots[oldCounter].classList.remove('dot_selected');
imagePicture.src = './assets/images/slideshow/' + slides[newCounter].image;
text.innerHTML = slides[newCounter].tagLine;
dots[newCounter].classList.add('dot_selected');
}
  