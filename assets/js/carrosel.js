const track = document.querySelector('.slider-track');
  const maxDuplicates = 5;
  const originalSlides = [...track.children]; 

  for (let i = 0; i < maxDuplicates; i++) {
    originalSlides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });
  }