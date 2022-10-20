addEventListener('DOMContentLoaded', (event) => {
    if( document.documentElement.clientWidth <= 576 ){
    const swiper = new Swiper('.swiper', {
      loop: true,
      direction: 'horizontal',
      centeredSlides: true,
      spaceBetween: 10,
      slidesPerView: 1,
    
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

});




