let menue = document.querySelector('header nav .fa');
let links = document.querySelector('header nav .links');

menue.onclick = function() {
    links.classList.toggle('visible');
    this.classList.toggle('clicked')
}

let linksItems = document.querySelectorAll('header nav .links a');

linksItems.forEach(link => {
    link.onclick = () => {
    links.classList.remove('visible');
    menue.classList.remove('clicked');
    }
});



let mainHeading = document.querySelector('.landing h2');
let portfolioBoxes = document.querySelectorAll('.portfolio .box');
let aboutItems = document.querySelectorAll('.about .box');
let contactBox = document.querySelector('.contact .info');

const observer = new IntersectionObserver(items => {

    items.forEach(item => {
        if(item.isIntersecting) {
            item.target.classList.add('visible');
            return;
        }
        item.target.classList.remove('visible');
    })
})

observer.observe(mainHeading);

portfolioBoxes.forEach(box => {
    observer.observe(box);
})

aboutItems.forEach(item => {
    observer.observe(item);
})

observer.observe(contactBox);