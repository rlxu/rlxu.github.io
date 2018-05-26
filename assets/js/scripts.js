$(document).ready(function() {
  var stickyNavTop = $('#nav-bar').offset().top;

  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
      $('#nav-bar').addClass('sticky-nav');
      $('#content').addClass('content');
    } else {
      $('#nav-bar').removeClass('sticky-nav'); 
      $('#content').removeClass('content'); 
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });

  var loadImage = function(){
    $('#my-logo').addClass('something');​
  }

  loadImage();
});
