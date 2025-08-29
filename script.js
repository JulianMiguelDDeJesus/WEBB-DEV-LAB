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
