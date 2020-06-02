// SLIDER //
let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);
autoSliding();


function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((item) => item.style.display = 'none');
    // for (let i=0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');

}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
prev.addEventListener('click', function () {
    plusSlides(-1);
});
next.addEventListener('click', function () {
    plusSlides(1);
});
dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i <= dots.length; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i]) {
            currentSlide(i + 1);
        }
    }
});

function autoSliding() {
    setTimeout(function () {
        plusSlides(1);
        autoSliding();
    }, 6000);

}

// Timer
//nustatome galinę datą.(deadline)
let deadline = '2020-06-18';

//Skirtumas tarp dabartinio laiko ir deadlino//
function getTimeRemaning(endtime) {

    let t = Date.parse(endtime) - Date.parse(new Date());

    seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / 1000 / 60 / 60);

    //Eksportuojam oblektą. Funkcija turi grazinti kazkoki rezultata. Sukuriame nauja objekta
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');
    timeInterval = setInterval(updateClock, 1000);

    //funkcija atnaujina laiką kas sekundę.

    function updateClock() {
        let t = getTimeRemaning(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);

//Counter//
let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 100;

    if (restDays.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 100;

    if (persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
    }
});

place.addEventListener('change', function () {

    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }

});

//button-slider///

function scrollIntoId() {
    document.getElementById('contacts').scrollIntoView({
        behavior: "smooth"
    });
}