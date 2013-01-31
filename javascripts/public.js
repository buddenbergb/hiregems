var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-37786157-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

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

  $('.launch-now.enabled').click(function() {
    $('.login-required').reveal({
      animation: 'fade',
      animationSpeed: 200,
      closeOnBackgroundClick: false
    });
  });

  $('.launch-email.enabled').click(function() {
    $('.credits-required').reveal({
      animation: 'fade',
      animationSpeed: 200,
      closeOnBackgroundClick: false
    });
  });

  $('.launch-select').click(function() {
    var launchBtn = $(this).closest('form').find('.launch-btn');

    if ( !$(this).is (':checked') ) {
      $(launchBtn).attr('disabled' , true );
    } else {
      $(launchBtn).removeAttr('disabled');
    }
  });

/*
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
      other: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

  console.log(isMobile);

  if (isMobile.iOS) {
    $('.device-iOS').show();
  } else {

    if (isMobile.Android) {
      $('.device-android').show();

    } else {
      $('.device-other').show();

    };

  };
*/

  //console.log(BrowserDetect.OS);

  if (BrowserDetect.OS == 'iPhone/iPod')
  {
    $('.device-ios').show();
  }
  else if (BrowserDetect.OS == 'Linux')
  {
    $('.device-android').show();
  }
  else
  {
    $('.device-other').show();
  }

});


