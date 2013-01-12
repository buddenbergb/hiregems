var $ = jQuery.noConflict();

var acctCred = $('#account-credits');
var menuWidth = $(acctCred).find('ul').width();
$(acctCred).find('strong').css({ width : menuWidth });

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.iOS) {
  $('.device-iOS').show();
} else {
  
  if (isMobile.Android) {
    $('.device-android').show();
  
  } else { 
    $('.device-any').show();
  
  };

};

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
