document.getElementById("fixedBox").innerHTML = `
  <div class="text-center p-5 mb-4 bg-danger text-white rounded">
    <p>This box has been fixed and styled correctly.</p>
  </div>
`;
document.getElementById("alertBtn").addEventListener("click", function () {
  alert("Thanks for clicking!");
});
