// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".navbar-nav a.nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash (the target section id)
      const hash = this.getAttribute("href");

      // Scroll to the target section
      document.querySelector(hash).scrollIntoView({
        behavior: "smooth",
      });

      // Close the mobile menu if it's open
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });
  });

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For now, we'll just show a success message
      const formElements = contactForm.elements;
      let isValid = true;

      // Simple validation
      for (let i = 0; i < formElements.length; i++) {
        if (
          formElements[i].type !== "submit" &&
          formElements[i].value.trim() === ""
        ) {
          isValid = false;
          formElements[i].classList.add("is-invalid");
        } else if (formElements[i].type !== "submit") {
          formElements[i].classList.remove("is-invalid");
        }
      }

      if (isValid) {
        // Display success message
        alert("Thank you for your message! I will get back to you soon.");
        contactForm.reset();
      }
    });
  }

  // Add active class to the current navigation item based on scroll position
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Initialize any animations or additional functionality
  animateOnScroll();
});

// Function to animate elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll(".card, .section-title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// Update copyright year dynamically
document.addEventListener("DOMContentLoaded", function () {
  const footerYear = document.querySelector("footer p");
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Muzammal Hussain. All rights reserved.`;
  }
});
