$(document).ready(function(){
   $('.menu__open-close, .menu__burger').click(function(event){
       $('.menu__open').toggleClass('active');
   });

   let button = $('.back-to-top');

    button.fadeOut(0);
    
    $(window).on('scroll', ()=>{
        if($(this).scrollTop()>=50){
           button.fadeIn(300);
        }else{
           button.fadeOut(300);
        }
    });
    
    button.on('click' ,(e) =>{
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 500);
    })
});

const swiper = new Swiper('.s6__swiper-container', {
   spaceBetween: 30,

   pagination: {
     el: '.s6__swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.s6__swiper-button-next',
     prevEl: '.s6__swiper-button-prev',
   },
 });

 const swiperComments = new Swiper('.s8__swiper-container', {
   spaceBetween: 30,

   pagination: {
     el: '.s8__swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.s8__swiper-button-next',
     prevEl: '.s8__swiper-button-prev',
   },
 });