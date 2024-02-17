const carousel = document.querySelector('#carouselExampleIndicators');
const currentImage = document.querySelector('#current-carousel-image');
const blurryImage = document.querySelector('#blurry-image');
blurryImage.style.backgroundImage = `url(${currentImage.src})`;
carousel.addEventListener('slide.bs.carousel', (event) => {
  blurryImage.style.backgroundImage = `url(${event.relatedTarget.querySelector('img').src})`;
});