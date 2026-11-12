
// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the menu after someone clicks a navigation link
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});


// 2. CONTACT FORM

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please complete all fields.";
    formMessage.style.color = "#ff8b8b";
    return;
  }

  formMessage.textContent =
    "Thanks, " + name + "! Your demo request has been received.";

  formMessage.style.color = "#72e2a7";

  contactForm.reset();
});
