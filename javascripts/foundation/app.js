;(function ($, window, undefined) 
{
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) 
  {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

var webServiceURL = '#';
var soapMessage = '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><GetAllCategoryFamilies xmlns="http://tempuri.org/" /></soap12:Body></soap12:Envelope>';

function SampleCall()
{
  $.ajax({
    url:          webServiceURL,
    type:         "POST",
    dataType:     "xml",
    data:         soapMessage,
    processData:  false,
    contentType:  "text/xml; charset=\"utf-8\"",
    success:      OnSuccess,
    error:        OnError
  });

  return false;
}

function OnSuccess(data, status)
{
  alert(data.d);
}

function OnError(request, status, error)
{
  alert('error');
}

$(document).ready(function() {
  jQuery.support.cors = true;

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
      pathToTabImage: '../images/click-share.png',
      imageHeight: '218px',
      imageWidth: '50px',
      tabLocation: 'right',
      speed: 300,
      action: 'click',
      topPos: '200px',
      fixedPosition: true
  });
});
