// =============================
// Back-to-Top Button
// =============================
const btnTop = document.getElementById("back-to-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

if (btnTop) {
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


// =============================
// Open all nav links in ONE reusable tab
// =============================
let fanClubTab = null; // store reference to the opened tab

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const url = this.href;

    // If tab not opened yet OR was closed, open a new one
    if (!fanClubTab || fanClubTab.closed) {
      fanClubTab = window.open(url, "FanClubTab");
    } else {
      // Reuse the same tab, change its location
      fanClubTab.location.href = url;
      fanClubTab.focus();
    }
    
  });
});
}

