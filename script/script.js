const listHightlighted = document.querySelectorAll('.highlighted img');

const btnPrev = document.querySelector('.btn-up');
const btnNext = document.querySelector('.btn-down');

let activeIndex = 0;

btnNext.addEventListener('click', function() {
    listHightlighted[activeIndex].classList.remove('active');

    activeIndex++

    if (activeIndex >= listHightlighted.length) {
        activeIndex = 0;
    }

    listHightlighted[activeIndex].classList.add('active');
});

btnPrev.addEventListener('click', function() {
    listHightlighted[activeIndex].classList.remove('active');

    activeIndex--

    if (activeIndex < 0) {
        activeIndex = listHightlighted.length - 1;
    }

    listHightlighted[activeIndex].classList.add('active');
})