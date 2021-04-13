const left = document.querySelector('.left-side');
const right = document.querySelector('.right-side');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');

// Left-side and Right-side Animation

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});

// Logo Animation

left.addEventListener('mouseenter', () => {
    logo.style.left = '10%';
    logo.style.background = 'url(./img/DC-logo.png) center center no-repeat';
    logo.style.backgroundSize = 'contain';
});
left.addEventListener('mouseleave', () => {
    logo.style.left = '40%';
    logo.style.background = 'none';
});
right.addEventListener('mouseenter', () => {
    logo.style.left = '60%';
    logo.style.background = 'url(./img/Marvel-logo.svg) center center no-repeat';
    logo.style.backgroundSize = 'contain';
});
right.addEventListener('mouseleave', () => {
    logo.style.left = '40%';
    logo.style.background = 'none';

});