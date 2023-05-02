const containerHighlighted = document.querySelector('.highlighted');
const imgContainer = document.querySelector('.img-container');
const listThumbs = document.querySelectorAll('.container-thumbs img');

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let i = 0; i < images.length; i++ ) {
    let games = images[i]; 
    imgContainer.innerHTML += `
    <img class="${i == 0 ? 'active' : ''}" src="assets/${games.image}">
    <div class="description">
        <h2 class="${i == 0 ? 'active' : ''}">${games.title}</h2>
        <p class="${i == 0 ? 'active' : ''}">${games.text}</p>
    </div>
    `
};

const btnPrev = document.querySelector('.btn-up');
const btnNext = document.querySelector('.btn-down');
const listHightlighted = document.querySelectorAll('.highlighted img');
const titleHighlighted = document.querySelectorAll('.description h2');
const textHighlighted = document.querySelectorAll('.description p');


let activeIndex = 0;

btnNext.addEventListener('click', function() {
    listHightlighted[activeIndex].classList.remove('active');
    titleHighlighted[activeIndex].classList.remove('active');
    textHighlighted[activeIndex].classList.remove('active');
    listThumbs[activeIndex].classList.remove('active');


    activeIndex++

    if (activeIndex >= listHightlighted.length) {
        activeIndex = 0;
    }

    listHightlighted[activeIndex].classList.add('active');
    titleHighlighted[activeIndex].classList.add('active');
    textHighlighted[activeIndex].classList.add('active');
    listThumbs[activeIndex].classList.add('active');
});

btnPrev.addEventListener('click', function() {
    listHightlighted[activeIndex].classList.remove('active');
    titleHighlighted[activeIndex].classList.remove('active');
    textHighlighted[activeIndex].classList.remove('active');
    listThumbs[activeIndex].classList.remove('active');

    activeIndex--

    if (activeIndex < 0) {
        activeIndex = listHightlighted.length - 1;
    }

    listHightlighted[activeIndex].classList.add('active');
    titleHighlighted[activeIndex].classList.add('active');
    textHighlighted[activeIndex].classList.add('active');
    listThumbs[activeIndex].classList.add('active');
})