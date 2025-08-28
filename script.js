// ✅ Collapsible menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    // Close other menus before opening new one
    document.querySelectorAll(".menu").forEach(menu => {
      if (menu !== item) {
        menu.classList.remove("active");
      }
    });

    // Toggle the clicked menu
    item.classList.toggle("active");
  });
});

// ✅ Dark/Light Mode Toggle
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

// Set initial button text
toggleBtn.textContent = body.classList.contains("light") 
  ? "🌑 Dark Mode" 
  : "🌙 Light Mode";

// Toggle light/dark on click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  // Update button text
  toggleBtn.textContent = body.classList.contains("light") 
    ? "🌑 Dark Mode" 
    : "🌙 Light Mode";
});
