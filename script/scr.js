// document.addEventListener( 'DOMContentLoaded', function () {
//   let splide = new Splide( '#image-carousel', {
//     type   : 'loop',
//     padding: '10%',
//     breakpoints: {
//       820: {
//         padding: '0',
//       },
//     }
//   } );
//   splide.mount();
//   let insta = new Splide( '#insta-carousel', {
//     perPage: 3,
//     rewind : true,
//     gap : '1rem',
//     breakpoints: {
//       640: {
//         perPage: 1,
//       },
//     }
//   } );
//   insta.mount();
// } );

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