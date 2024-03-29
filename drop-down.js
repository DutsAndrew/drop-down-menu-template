const dropDownSvg = document.querySelector('#drop-down-menu-svg');
  dropDownSvg.addEventListener('click', dropDownMenu);

function dropDownMenu() {
  const dropDownTopBar = document.querySelector('#drop-down-top-bar');
    dropDownTopBar.classList.toggle('clicked');

  const dropDownNav = document.querySelector('#drop-down-nav');
    dropDownNav.classList.toggle('drop-down-nav-open');
    dropDownNav.classList.toggle('drop-down-collapsed');
    
  const dropDownItemsContainer = document.querySelector('#drop-down-items-container');
    dropDownItemsContainer.classList.toggle('drop-down-items-container-open');
    dropDownItemsContainer.classList.toggle('drop-down-collapsed');

  const dropDownHome = document.querySelector('#drop-down-home');
    dropDownHome.classList.toggle('drop-down-home-open');
    dropDownHome.classList.toggle('drop-down-collapsed');

  const dropDownAbout = document.querySelector('#drop-down-about');
    dropDownAbout.classList.toggle('drop-down-about-open');
    dropDownAbout.classList.toggle('drop-down-collapsed');

  const dropDownContact = document.querySelector('#drop-down-contact');
    dropDownContact.classList.toggle('drop-down-contact-open');
    dropDownContact.classList.toggle('drop-down-collapsed');
}

const dropDownHome = document.querySelector('#drop-down-home');
  dropDownHome.addEventListener('click', function(e) {
    toggleButton(e);
  });

const dropDownAbout = document.querySelector('#drop-down-about');
  dropDownAbout.addEventListener('click', function(e) {
    toggleButton(e);
  });

const dropDownContact = document.querySelector('#drop-down-contact');
  dropDownContact.addEventListener('click', function(e) {
    toggleButton(e);
  });

function toggleButton(e) {
  let selectedClass = e.composedPath()[0].classList[0];
  console.log(selectedClass);

  let buttonEvent = e.composedPath()[0].id;
  let selectedButton = document.querySelector(`#${buttonEvent}`);
  console.log(selectedButton);

  selectedButton.classList.toggle('button-clicked');
}