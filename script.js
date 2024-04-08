let navOpen = document.querySelector('#nav-part2-mobile');
let navClose = document.querySelector('#close-icon');
let mobileMenu = document.querySelector('#menu-ul');

navOpen.addEventListener('click', ()=>{
    mobileMenu.style.display = 'flex';
})

navClose.addEventListener('click', ()=>{
    mobileMenu.style.display = 'none';
})
document.querySelector('#hero').addEventListener('click', ()=>{
    mobileMenu.style.display = 'none';
})

gsap.from('#hero-part1 > h1:nth-child(1), #hero-part1-img-div', {
    x: -100,
    opacity: 0,
    duration: 1.5
})
gsap.from('#hero-part1 > h1:nth-child(2)', {
    x: 16,
    opacity: 0,
    duration: 1
})
gsap.from('#hero-part2', {
    scale: .5,
    opacity: 0,
    duration: 2
})
gsap.from('#hero-part1-bottom > p:nth-child(1) , #hero-part1-bottom > p:nth-child(2)', {
    y: 100,
    opacity: 0,
    duration: 1
})