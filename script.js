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

// Dark/Light Mode toggle
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

function updateToggleText(){
  toggleBtn.textContent = body.classList.contains("light") ? "🌑 Dark Mode" : "☀️ Light Mode";
}
updateToggleText();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("light") ? "light" : "dark");
  updateToggleText();
  syncIframeTheme();
});

// Sync iframe theme
function syncIframeTheme(){
  document.querySelectorAll("iframe").forEach(iframe => {
    if(iframe.contentWindow){
      iframe.contentWindow.postMessage({theme: body.classList.contains("light") ? "light" : "dark"}, "*");
    }
  });
}

// Load saved theme
window.addEventListener("load", () => {
  const saved = localStorage.getItem("theme");
  if(saved){
    body.classList.remove("light","dark");
    body.classList.add(saved);
    updateToggleText();
    syncIframeTheme();
  }
});

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
