const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let counter = 0;


slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transition = 'opacity 1s ease-in-out';
            slide.style.opacity = 0;
            setTimeout(() => {
                slide.style.transition = '';
                slide.style.transform = `translateX(-${counter * 100}%)`;
                slide.style.opacity = 1;
            }, counter === 0 ? 0 : 1000);
        }
    )
}

const prev = () => {
    if (counter === 0) {
        counter = slideCount - 1;
    } else {
        counter--;
    }
    slideImage();
}


const next = () => {
    if (counter === slideCount - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImage();
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

// setInterval(() => {
//     next();
//     console.log(counter);
// }, 5000);

const images = document.querySelectorAll('.image-container img');
let index = 0;
images[index].style.opacity = 1;
setInterval(() => {
    next();
    console.log(counter);
}, 5000);
