// ✅ Collapsible Menus
document.querySelectorAll(".menu").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu").forEach(menu => {
      if (menu !== item) menu.classList.remove("active");
    });
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

function updateToggleText() {
  toggleBtn.textContent = body.classList.contains("light")
    ? "🌑 Dark Mode"
    : "☀️ Light Mode";
}

// Initial state
updateToggleText();

// Toggle button event
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  updateToggleText();
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
  syncIframeTheme();
});

// ✅ Sync iframe theme
function syncIframeTheme() {
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach(iframe => {
    if (iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        { theme: body.classList.contains("light") ? "light" : "dark" },
        "*"
      );
    }
  });
}

// Apply saved theme on load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
    updateToggleText();
  }
});
