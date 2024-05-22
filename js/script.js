// script.js

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  // Function to add a class for fade-in animation
  function addAnimationClass() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const threshold = window.innerHeight - 300; // Adjust this value if necessary

      if (sectionTop < threshold || (window.scrollY + window.innerHeight >= pageHeight - sectionHeight / 2)) {
        section.classList.add("animate");
      }
    });
  }

  // Initial check for sections in the viewport
  addAnimationClass();

  // Check for sections in the viewport on scroll, and when the page is fully loaded
  window.addEventListener("scroll", addAnimationClass);
  window.addEventListener("load", addAnimationClass); // Ensures check is performed when everything is loaded

  // Mobile navigation toggle, assuming this is still needed
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  if (mobileNavToggle) {
    const mobileNav = document.querySelector(".mobile-nav");
    mobileNavToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("active");
    });
  }
});