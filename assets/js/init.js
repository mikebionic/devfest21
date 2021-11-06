(function ($) {
  'use strict';

  //
  // Preloader
  jQuery(window).load(function() {
    jQuery(".preloader").delay(1000).fadeOut("slow");
  });

  $( document ).ready(function() {

    //
    // Sticky Header
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('body').addClass("sticky-nav");
      }
      else {
        $('body').removeClass("sticky-nav");
      }
    });
    $(window).scroll();

    //
    // Smooth Scrolling
    $('.fp-navbar a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 50
          }, 500);
          return false;
        }
      }
    });

    //
    // ScrollSpy
    $("body").scrollspy({
      target  : '.navbar',
      offset  : 60
    });

    //
    // Fitvids
    $(".vid-responsive").fitVids();

    //
    // Countdown
    var time = '2021/11/20'; //Change this date with your counting date. Its Format is "Y/M/D"
    $('#countdown-timer').countdown( time , function( e ) {
      $(this).html(e.strftime(''
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%D</div><span class="fp-unit">Days</span></div></div>'
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%H</div><span class="fp-unit">Hours</span></div></div>'
          +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%M</div><span class="fp-unit">Minutes</span></div></div>'
          // +'<div class="countdown-box"><div class="box-inner"><div class="count-amount">%S</div><span class="fp-unit">Seconds</span></div></div>'
      ));
    });

    //
    // Slide Background
    $('.site-header').vegas({
      slides: [
        { src: "assets/images/slide_img01.jpg" },
        { src: "assets/images/slide_img02.jpg" },
      ]
    });

    //
    // Custom Tabs (Without Bootstrap)
    var tab = $('.tabs > li > a');
    tab.on('click', function( e ) {
      e.preventDefault();

      var tab_id = $(this).attr('data-tab');

      tab.removeClass('active');
      $('.tab-content').removeClass('current');

      $(this).addClass('active');
      $("#"+tab_id).addClass('current');

    });

    //
    // Subscribe (mailchimp)
    var mailSubscribe   = $('.subscribe-form');

    mailSubscribe.ajaxChimp({
      callback: mailchimpCallback,
      url: "http://frontpixels.us11.list-manage.com/subscribe/post?u=8ed724b6f4db710960cbc2439&amp;id=26648b74c9" // Just paste your mailchimp list url inside the "".
    });

    function mailchimpCallback(resp) {

      var successMessage    = $('.subscribe-success'),
        errorMessage      = $('.subscribe-error'),
        successIcon       = '<i class="ion-ios-checkmark"></i> ',
        errorIcon         = '<i class="ion-ios-close"></i> ';

      if (resp.result === 'success') {
        successMessage.html(successIcon + resp.msg).fadeIn(1000);
        errorMessage.fadeOut(300);

      } else if(resp.result === 'error') {
        errorMessage.html(errorIcon + resp.msg).fadeIn(1000);
      }

    }

    //
    // Google Map
    var mapLocation = new google.maps.LatLng(40.712784, -74.005941); //change coordinates here
    var marker;
    var map;

    function initialize() {
      var mapOptions = {
        zoom: 12, //change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
          {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#212121"}]},
          {"featureType":"landscape","elementType":"all","stylers":[{"color":"#e3e3e3"}]},
          {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
          {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
          {"featureType":"road","elementType":"all","stylers":[{"saturation":-60},{"lightness":15}]},
          {"featureType":"road.highway","elementType":"all","stylers":[{"color":"#e3e3e3","visibility":"simplified"}]},
          {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
          {"featureType":"water","elementType":"all","stylers":[{"color":"#b3e5fc"},{"visibility":"on"}]}
        ]

      };

      map = new google.maps.Map(document.getElementById('map'),
          mapOptions);

      // Replace with your data
      var contentString = '<div class="map-info-box">'
          + '<div class="info-head"><img src="assets/images/logo_black.png" alt=""></div>'
          + '<p class="map-address"><i class="ion-ios-location"></i> New York, USA<br><i class="ion-ios-telephone"></i> 012-345-6789<br><i class="ion-email"></i> <a href="mailto:info@example.com">info@example.com</a></p>'

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      var image = 'assets/images/marker.png';
      marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Rhyme', //change title here
        icon: image,
        animation: google.maps.Animation.DROP,
        position: mapLocation
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
    }

    // google.maps.event.addDomListener(window, 'load', initialize);

  });

  //
  // Gallery
  $('.gallery').owlCarousel({
    loop                : true,
    autoplay            : true,
    autoplayTimeout     : 5000,
    autoplayHoverPause  : true,
    items               : 1,
    margin              : 0,
    mouseDrag           : false,
    nav                 : true,
    navText             : ['<i class="ion-ios-arrow-left"><i/>','<i class="ion-ios-arrow-right"><i/>']
  });

  //
  // Sponsors
  $('.sponsors').owlCarousel({
    loop            : true,
    autoplay        : true,
    autoplayTimeout : 5000,
    margin          : 30,
    responsiveClass : true,
    responsive:{
      0:{
        items   : 1,
        margin  : 0
      },
      736:{
        items   : 2
      },
      991:{
        items   : 3
      },
      1000:{
        items   : 4
      },
      1200:{
        items   : 5
      }
    }
  });

})(window.jQuery);