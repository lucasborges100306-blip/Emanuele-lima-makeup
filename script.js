let index = 0;

function moveSlide(direction){
  const track = document.getElementById('carouselTrack');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth + 18;

  index += direction;

  if(index < 0) index = items.length - 1;
  if(index >= items.length) index = 0;

  track.style.transform = `translateX(${-index * itemWidth}px)`;
}
