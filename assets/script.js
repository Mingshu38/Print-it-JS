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
/* ETAPE 1 mise en place des images des flèches dans le code index.html */

/* DECLARATION DES VARIABLES*/
/* CREATION DES VARIABLES flêches , images de la banières , paragraphes */
/* Création de la variable qui sélectionne les Flèches via leur class */
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
/* création des variables qui sélectionne l'image et le texte via leur class */
const bannerImg = document.querySelector(".banner-img");
const bannerP = document.querySelector("#banner p");
/* Bullet point */
const dots = document.querySelector(".dots");
/* Création du compteur */
let countSlide = 0; /*index de la 1ère image */

/* ETAPE 4 et 5 Création du carousselle  */
/* Création de la fonction createSlider pour mettre à jour l'image et le texte 
lorsque l'on clic sur les flèches  */
function createSlider() {
	const currentImg = slides[countSlide]['image'];
	const currentP = slides[countSlide]['tagLine'];
	bannerImg.setAttribute('src','assets/images/slideshow/'+currentImg);
	bannerP.innerHTML = currentP;
/* Mettre à jour les bullets points par rapport à l'image séléctionnée */
/* Je crée une boucle avec la Méthode forEach qui permet de récuperer les 
données d'un tableau appliqué sur la variable "dotSelect"*/
/* Séléction de mon dot , j'indique la valeur "dot" et l'index */
dotSelect.forEach((dot, index) => {
	if (index === countSlide) {
/* Si l'image est active alors le point sera séléctionné en attribuant la classe
CSS du point séléctionné "dot_selected" */
	  dot.classList.add("dot_selected");
	} else {
/* Sinon on éfface la classe avec "remove "*/
	  dot.classList.remove("dot_selected");
	}
  });
}

/* ETAPE 2 Création des evenListeners pour les flèches  */
/* GAUCHE , avec la méthode addEventListener on crée un événement , c'est à
dire le clic à la flèche gauche et changer d'image */
arrowLeft.addEventListener("click",function(){
	/* Test pour voir si le clic gauche fonctionne
	console.log("Le clic de la flèche de gauche fonctionne");
	*/
	if(countSlide === 0){
		countSlide = slides.length - 1
	} else {
		countSlide -= 1
	}
	/* Appel de la fonction createSlider */
	createSlider()
})
/* DROITE même méthode que pour la flèche gauche */
arrowRight.addEventListener("click", function(){
	/* Test pour voir si le clic droit fonctionne
	console.log("Le clic droit fonctionne également");
	*/
	if(countSlide === slides.length - 1){
		countSlide = 0
	} else {
		countSlide += 1		
	}
	/* Appel de la fonction createSlider */
	createSlider()
})

/* ETAPE 3 ajout des Bullets Points */
/* Création d'une boucle "for" pour compter le nombre d'images présentes
dans le tableau et ainsi avoir le même nombre de points que d'images !
For initialise , puis condition , enfin l'expression finale */
for (let i = 0 ; i < slides.length ; i++){
	/* création d'une "div"pour 1 point avec la méthode createElement */
	let dot = document.createElement('div');
	/* Création d'une classe = dot avec la propriété .classList
	et la méthode "add" ; qui correspond à un seul point 
	qui a pour parent dotsSlide ("dots") avec la propriété .appendChild  */
	dot.classList.add('dot');
	dots.appendChild(dot);
}

/* ETAPE 3 (suite) Différencier le point qui signale la image en 
cours de visionnage */
/* Création de la variable permettant de mettre en avant le point de la 
diapositive sélectionnée */
let dotSelect = document.querySelectorAll(".dot");
/* Attribution du point séléctionné à la première image avec le classe 
CSS correspondante */
dotSelect[countSlide].classList.add('dot_selected');




/* ETAPE 4 et 5 Navigation avec les flèches  */
/* Flèche de gauche*/
function previousSlide(){
	/* Mise en place d'une condition "if" : Si le compteur des slides 
	est < ou = à 0 alors on revient au dernier slide */
	if (countSlide <= 0){
		countSlide = slides.length -1;
	}
	/* Sinon on décrémente le compteur de 1*/
	else {
		countSlide--;
	}
	createSlider()
}

/* Flèche de droite*/
function nextSlide(){
	/* Cette fois-ci ,si le compteur est suppérieur ou égal au nombre d'images
	du tableau , alors on revient au premier Slide */
	if (countSlide >= slides.length -1){
	countSlide = 0;
	}
	/* Sinon on incrémente de 1 le compteur */
	else{
		countSlide++;
	}
	createSlider()
}

/* ETAPE 5 Permet de rendre les points cliquables , pour changer d'images */
/* Utilisation d'une boucle et de la méthode forEach */
dotSelect.forEach((dot, index) => {
/* Je crée le clic avac la méthode addEventListener */
	dot.addEventListener("click", () => {
/* Permet de définir quel point sélectionner et l'image à afficher  */
	  countSlide = index;
	  createSlider();
	});
  });

