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
    var time = '2021/12/5 10:30'; //Change this date with your counting date. Its Format is "Y/M/D"
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