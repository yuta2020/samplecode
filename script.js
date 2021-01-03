//  ハンバーガーメニュー開閉 //

$(function(){
  var imgHeight = $('.fv__wrapper').outerHeight();
  var bgHeight = $('.fv').outerHeight();


  $(".burger-btn").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }else{
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header__nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

//　ハンバーガーメニューscroll　//

  $(window).on('load scroll', function(){
     if ($(window).scrollTop() < imgHeight -50) {
       $('.header__logo').removeClass('black');
     }else {
       $('.header__logo').addClass('black');
     }

     if ($(window).scrollTop() < bgHeight -50) {
       $('.burger-btn').removeClass('black');
     }else {
       $('.burger-btn').addClass('black');
     }
  });
});
