// Collapsible menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// Dark/Light Mode Toggle
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  toggleBtn.textContent = body.classList.contains("light")
    ? "🌑 Toggle Dark"
    : "🌙 Toggle Light";
});
