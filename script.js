// script.js

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section");

  // Function to add a class for fade-in animation
  function addAnimationClass() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 300) {
        section.classList.add("animate");
      }
    });
  }

  // Initial check for sections in the viewport
  addAnimationClass();

  // Check for sections in the viewport on scroll
  window.addEventListener("scroll", addAnimationClass);
});
s