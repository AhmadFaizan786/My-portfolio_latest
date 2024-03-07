document.querySelector("#scroll-down").addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector("#about-me").offsetTop - 20,
    });
  });
  
  document.querySelector("#toggle-theme").addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
  });
  
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  )?.matches;
  if (prefersLight) {
    document.documentElement.classList.toggle("light-theme");
  }
  
  // Add this script to your HTML file
window.addEventListener('scroll', function() {
    const image = document.getElementById('myImage');
    const imageTop = image.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (imageTop < windowHeight) {
      image.style.animationPlayState = 'running'; /* Start animation on scroll */
    }
  });
  