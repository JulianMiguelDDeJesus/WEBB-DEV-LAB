<<<<<<< HEAD
// ==========================
// Back to Top Button
// ==========================
const backToTopBtn = document.getElementById("backToTop");

// Show or hide the button depending on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Smooth scroll back to top when button is clicked
backToTopBtn.addEventListener("click", function () {
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
=======

  // Get the button
  const backToTopBtn = document.getElementById("backToTop");

  // Show the button when user scrolls down
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  // Scroll back to top when clicked
  backToTopBtn.addEventListener("click", function () {
>>>>>>> 1faecde49b55dd0c1fb275db158bdae2845838b0
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
<<<<<<< HEAD
});
=======

>>>>>>> 1faecde49b55dd0c1fb275db158bdae2845838b0
