// Mobile nav toggle
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("open");
}

// Close nav when a link is clicked on mobile
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 60) {
    navbar.style.padding = "0.6rem 2.5rem";
    navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.4)";
  } else {
    navbar.style.padding = "1rem 2.5rem";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
  }
});

// Scroll-reveal for cards
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(
    ".cat-card, .product-card, .why-card, .team-card, .gallery-item",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
