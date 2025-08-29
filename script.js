// Collapsible menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu").forEach(menu => {
      if(menu !== item) menu.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

// Prevent submenu links from closing menu
document.querySelectorAll(".menu ul li a").forEach(link => {
  link.addEventListener("click", e => e.stopPropagation());
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      themeToggle.textContent = "🌞 Light Mode";
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      themeToggle.textContent = "🌑 Dark Mode";
    }
  });
}
