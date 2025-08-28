// ✅ Collapsible Menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    // close others
    document.querySelectorAll(".menu").forEach(menu => {
      if (menu !== item) menu.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// ✅ Dark/Light Mode Toggle
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

// Set initial text
toggleBtn.textContent = body.classList.contains("light") 
  ? "🌑 Dark Mode" 
  : "🌙 Light Mode";

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("light")
    ? "🌑 Dark Mode"
    : "🌙 Light Mode";
});
