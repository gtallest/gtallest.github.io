$(document).ready(function(){

    $("#home-nav").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
        scrollTop: $("#home").offset().top - 50
    }, 1000, 'easeInOutExpo');
});

$("#portfolio-nav").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 50
    }, 1000, 'easeInOutExpo');
});

$("#connect-nav").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
        scrollTop: $("#connect").offset().top - 50
    }, 1000, 'easeInOutExpo');
});
      //# sourceURL=pen.js


});
