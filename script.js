const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

year.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile nav when clicking a link
nav?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

// Front-end only "send" behavior
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  formStatus.textContent = "Thanks! Your message is ready to send (wire this to an email/API next).";
  contactForm.reset();
});
