'use strict';


let swiper2 = new Swiper('.swiper2', {
  effect:'coverflow',
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable:true,
  },
  coverflowEffect:{
    slideShadows: false,
    rotate:20,
    scale:0.70,
  }
});




