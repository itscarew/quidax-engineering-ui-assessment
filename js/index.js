'use strict';
/**
 * Quidax Book Club UI Engineering Test
 *
 * Implementing the dashboard UI interaction
 * Author: Emma Popoola (@hemmayo)
 */

//  Navigation controls

const navbarControlButtons = document.querySelectorAll(
  '.Navbar__close, .Header__hamburger',
);

const navbar = document.querySelector('.Navbar');

navbarControlButtons.forEach(button => {
  button.addEventListener('click', () => {
    navbar.classList.contains('Navbar--open')
      ? navbar.classList.remove('Navbar--open')
      : navbar.classList.add('Navbar--open');
  });
});

// Search controls for mobile

const header = document.querySelector('.Header');
const searchControls = header.querySelectorAll('#close-search, #open-search');

searchControls.forEach(control => {
  control.addEventListener('click', () => {
    header.classList.contains('search-active')
      ? header.classList.remove('search-active')
      : header.classList.add('search-active');
  });
});

// Book additional info controls

const books = document.querySelectorAll('.Book');

books.forEach(book => {
  const infoControls = book.querySelectorAll(
    '.Book__see-more, .Book__info-close',
  );

  //   Add event listener if there's any available control for a book component

  if (infoControls) {
    infoControls.forEach(control => {
      control.addEventListener('click', () => {
        book.classList.contains('preview')
          ? book.classList.remove('preview')
          : book.classList.add('preview');
      });
    });
  }
});
