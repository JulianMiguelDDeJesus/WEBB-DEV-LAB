// ==========================
// Back to Top Button
// ==========================
const backToTopBtn = document.getElementById("backToTop");

// Show or hide the button depending on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll back to top when button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ==========================
// Scroll to Top when Sidebar Link is Clicked
// ==========================
const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
