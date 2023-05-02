const listHightlighted = document.querySelectorAll('.highlighted img');

const btnPrev = document.querySelector('.btn-up');
const btnNext = document.querySelector('.btn-down');

let activeIndex = 0;

btnNext.addEventListener('click', function() {
    listHightlighted[activeIndex].classList.remove('active');

    activeIndex++

    listHightlighted[activeIndex].classList.add('active');
});

btnPrev.addEventListener('click', function() {
    listHightlighted[activeIndex].classList.remove('active');

    activeIndex--

    listHightlighted[activeIndex].classList.add('active');
})