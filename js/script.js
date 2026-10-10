// Mobile Drawer Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Theme Toggle (Dark / Light Mode)
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  htmlElement.setAttribute("data-theme", "light");
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
} else {
  htmlElement.setAttribute("data-theme", "dark");
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    htmlElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// Dynamic Typewriter Effect
const roles = [
  "Software Engineer",
  "Full-Stack Web Developer",
  "Next.js & Laravel Specialist",
  "Mobile App Engineer",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextSpan = document.getElementById("typed-text");

function typeEffect() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Filter Skills Function
function filterSkills(category, btn) {
  const tabs = btn.parentElement.querySelectorAll(".filter-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));
  btn.classList.add("active");

  const items = document.querySelectorAll(".skill-item");
  items.forEach((item) => {
    if (
      category === "all" ||
      item.getAttribute("data-category").includes(category)
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Filter Projects Function
function filterProjects(category, btn) {
  const tabs = btn.parentElement.querySelectorAll(".filter-btn");
  tabs.forEach((tab) => tab.classList.remove("active"));
  btn.classList.add("active");

  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// Contact Form Validation & Toast Feedback (No alert() used)
const contactForm = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    return;
  }

  // Trigger Custom Toast Notification
  toastMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
  toast.classList.add("show");
  contactForm.reset();

  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
});
