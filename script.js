// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class to sections in viewport
  function animateSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add('animated');
      }
    });
  }
  
  // Event listener for scroll event
  window.addEventListener('scroll', () => {
    animateSections();
  });
  
  // Initial animation check on page load
  animateSections();