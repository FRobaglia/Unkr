let planets = document.querySelectorAll('.planet')

window.addEventListener('scroll', () => {  
  planets.forEach(planet => {
    planet.style.transform = `translate(0px, ${getSpeed(planet)}px) rotate(${getSpeed(planet) / 15}deg)`;

  })

});

function getSpeed(planet) {
  return -window.scrollY * planet.getBoundingClientRect().height / 2000
}