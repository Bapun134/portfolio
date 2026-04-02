// Active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header__nav-link, .footer__nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 250;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("header__nav-link--active", "footer__nav-link--active");
    if (link.getAttribute("href") === `#${current}`) {
      if (link.classList.contains("header__nav-link")) {
        link.classList.add("header__nav-link--active");
      }
      if (link.classList.contains("footer__nav-link")) {
        link.classList.add("footer__nav-link--active");
      }
    }
  });
});

// Dynamic footer year
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const copyright = document.querySelector(".footer__copyright");
  if (copyright) {
    copyright.innerHTML = `<p>© Bapun&nbsp;&nbsp;Sahoo&nbsp;&nbsp;${currentYear}</p>`;
  }
});

// Smooth scroll with offset for sticky header
document.querySelectorAll('.header__nav-link[href^="#"], .footer__nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      // Set offset based on screen width
      const headerOffset = window.innerWidth >= 1024 ? 60 : 85;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});