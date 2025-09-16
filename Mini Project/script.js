// =============================
// Back-to-Top Button
// =============================
const btnTop = document.getElementById("back-to-top");
if (btnTop) {
  window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 200 ? "block" : "none";
  });
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =============================
// Open all nav links in ONE reusable tab
// =============================
let fanClubTab = null;
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = this.href;
    if (!fanClubTab || fanClubTab.closed) {
      fanClubTab = window.open(url, "FanClubTab");
    } else {
      fanClubTab.location.href = url;
      fanClubTab.focus();
    }
  });
});
