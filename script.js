// ✅ Collapsible menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    // close other menus before opening new one (optional)
    document.querySelectorAll(".menu").forEach(menu => {
      if (menu !== item) {
        menu.classList.remove("active");
      }
    });

    // toggle the clicked menu
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

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");

  // Change button text based on theme
  if (body.classList.contains("light")) {
    toggleBtn.textContent = "🌑 Dark Mode";
  } else {
    toggleBtn.textContent = "🌙 Light Mode";
  }
});
