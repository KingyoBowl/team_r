document.addEventListener( 'DOMContentLoaded', function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(document).ready(function() {
      var windowWidth = $(window).width();
      if (windowWidth > 820) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1200) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 200);
      return false;
  });
      }
  });

} );

// protect
// document.addEventListener("contextmenu", function (e) {
//       e.preventDefault();
// });
// document.addEventListener("dragstart", function (e) {
//       e.preventDefault();
// });

const hamburgerMenu = document.querySelector('.nav-toggle');
const header = document.querySelector('.body');

hamburgerMenu.addEventListener('click', () => {
  header.classList.toggle('js-open');
});

// let button = document.querySelector('.scroll');
// let scrollPx = 1300;
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//   if (document.body.scrollTop > scrollPx || document.documentElement.scrollTop > scrollPx) {
//     button.style.display = "block";
//     button.style.opacity = 1;
//   } else {
//     fadeOut(button,500)
//   }
// }
