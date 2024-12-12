 // Get the elements
const nav = document.querySelector('nav');
const heroSection = document.querySelector('.hero-section');
const experienceSection = document.querySelector('.experience-section');
const footer = document.querySelector('footer');

// Function to make the navigation responsive
function responsiveNav() {
  if (window.innerWidth < 768) {
    nav.style.flexDirection = 'column';
    nav.style.alignItems = 'center';
    nav.style.padding = '20px';
  } else {
    nav.style.flexDirection = 'row';
    nav.style.alignItems = 'center';
    nav.style.padding = '0';
  }
}

// Function to make the hero section responsive
function responsiveHeroSection() {
  if (window.innerWidth < 768) {
    heroSection.style.flexDirection = 'column';
    heroSection.style.alignItems = 'center';
    heroSection.style.padding = '20px';
  } else {
    heroSection.style.flexDirection = 'row';
    heroSection.style.alignItems = 'center';
    heroSection.style.padding = '0';
  }
}

// Function to make the experience section responsive
function responsiveExperienceSection() {
  if (window.innerWidth < 768) {
    experienceSection.style.flexDirection = 'column';
    experienceSection.style.alignItems = 'center';
    experienceSection.style.padding = '20px';
  } else {
    experienceSection.style.flexDirection = 'row';
    experienceSection.style.alignItems = 'center';
    experienceSection.style.padding = '0';
  }
}

// Function to make the footer responsive
function responsiveFooter() {
  if (window.innerWidth < 768) {
    footer.style.flexDirection = 'column';
    footer.style.alignItems = 'center';
    footer.style.padding = '20px';
  } else {
    footer.style.flexDirection = 'row';
    footer.style.alignItems = 'center';
    footer.style.padding = '0';
  }
}

// Add event listener to the window
window.addEventListener('resize', () => {
  responsiveNav();
  responsiveHeroSection();
  responsiveExperienceSection();
  responsiveFooter();
});

// Call the functions on page load
responsiveNav();
responsiveHeroSection();
responsiveExperienceSection();
responsiveFooter();