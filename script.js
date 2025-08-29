// ✅ Collapsible Menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    // Close all other menus
    document.querySelectorAll(".menu").forEach(menu => {
      if (menu !== item) {
        menu.classList.remove("active");
      }
    });
    // Toggle current menu
    item.classList.toggle("active");
  });
});

// ✅ Prevent submenu links from collapsing menu
document.querySelectorAll(".menu ul li a").forEach(link => {
  link.addEventListener("click", e => e.stopPropagation());
});

// ✅ Dark/Light Mode Toggle
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

// Set initial button text
function updateToggleText() {
  toggleBtn.textContent = body.classList.contains("light")
    ? "🌑 Dark Mode"
    : "☀️ Light Mode";
}

// Set initial state on page load
updateToggleText();

// Toggle event
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  updateToggleText();
});
