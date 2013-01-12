var $ = jQuery.noConflict();

$(document).ready(function() {
  jQuery.support.cors = true;

  var topBar = $('.toggle-topbar a');
  $(topBar).click(function() {
    $('.top-bar').animate({
      height: 300
    }, 300);
    return false;
  });
  
  $('#hero').orbit({
    animation: 'fade',
    animationSpeed: 400,
    timer: true,
    advanceSpeed: 8000,
    captions: false,
    bullets: true,
    fluid: '16x7'
  });

  $('#testimonials').orbit({
    animation: 'horizontal-slide',
    animationSpeed: 400,
    timer: false,
    advanceSpeed: 8000,
    captions: false,
    bullets: true,
    fluid: '16x8'
  });

  $('#customer-logos, #partner-logos').orbit({
    animation: 'horizontal-slide',
    animationSpeed: 400,
    timer: false,
    advanceSpeed: 8000,
    captions: false,
    bullets: false
  });

  $('.click-share').tabSlideOut({
      tabHandle: '.handle',
      pathToTabImage: '/images/click-share.png',
      imageHeight: '218px',
      imageWidth: '50px',
      tabLocation: 'right',
      speed: 300,
      action: 'click',
      topPos: '200px',
      fixedPosition: true
  });

  $('.launch-now').click(function() {
    $('.login-required').reveal({
      animation: 'fade',
      animationSpeed: 200,
      closeOnBackgroundClick: false
    });
  });
  
  $('.launch-email').click(function() {
    $('.credits-required').reveal({
      animation: 'fade',
      animationSpeed: 200,
      closeOnBackgroundClick: false
    });
  });
  
});
