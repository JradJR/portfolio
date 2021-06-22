document.querySelector('header nav .fa').onclick = function() {
    document.querySelector('header nav .links').classList.toggle('visible');
    this.classList.toggle('clicked')
}

let links = document.querySelectorAll('header nav .links a');
links.forEach(link => {
    link.onclick = () => {
    document.querySelector('header nav .links').classList.remove('visible');
    document.querySelector('header nav .fa').classList.remove('clicked');
    }
})

// stll need to learn code  ((--  it's just copied  --))


var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.about .skills .skill'); 
let portfolioItems = document.querySelectorAll('.portfolio .box, .about .box')
function loop() {
    window.setTimeout(() => {
        elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }else element.classList.remove('visible');
        });
    
        portfolioItems.forEach(item => {
        if(isElementInViewport(item)) item.classList.add('visible');
        else item.classList.remove('visible');
        })
        
        if(isElementInViewport(document.querySelector('.landing h2'))) {
            document.querySelector('.landing h2').classList.add('visible');
        }else {
            document.querySelector('.landing h2').classList.remove('visible');
        }
    
    
        if(isElementInViewport(document.querySelector('.contact .info'))) {
            document.querySelector('.contact .info').classList.add('visible');
        }else {
            document.querySelector('.contact .info').classList.remove('visible');
        }
        scroll(loop);
        console.log('looped');
    }, 10)
}

// Call the loop for the first time
window.setTimeout(loop, 500)



// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// stll need to learn code 
