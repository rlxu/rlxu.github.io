// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
