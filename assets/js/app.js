const body = document.querySelector('body');
const navbarNav = document.querySelector('.navbar-nav');
const overlay = document.querySelector('.overlay');

const showSidebar = function () {
  body.classList.toggle('overflow-hidden');
  navbarNav.classList.add('show-sidebar');
  overlay.style.display = 'block';
};

const hideSidebar = function () {
  body.classList.toggle('overflow-hidden');
  navbarNav.classList.remove('show-sidebar');
  overlay.style.display = 'none';
};

// show sidebar using hamburger button
const navbarShowBtn = document.querySelector('.navbar-show-btn').addEventListener('click', showSidebar);

// hide sidebar using close button
const navbarCloseBtn = document.querySelector('.navbar-close-btn').addEventListener('click', hideSidebar);

// hide sidebar using overlay
overlay.addEventListener('click', hideSidebar);

// show more text
const readMore = document.querySelector('.about-paragraph').textContent;
const readLess = document.querySelector('.about-paragraph').textContent.substring(0, 700);
const aboutParagraph = document.querySelector('.about-paragraph');
aboutParagraph.textContent = readLess;

const aboutBtn = document.querySelector('.about-btn').addEventListener('click', function (e) {
  if (e.target.textContent === 'Read More') {
    e.target.textContent = 'Read Less';
    aboutParagraph.textContent = readMore;
  } else {
    e.target.textContent = 'Read More';
    console.log(e.target.textContent);
    aboutParagraph.textContent = readLess;
  }
});
