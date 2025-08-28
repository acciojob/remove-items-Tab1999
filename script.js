//your JS code here. If required.
// script.js
window.onload = function () {
  const select = document.getElementById("colorSelect");
  const button = document.querySelector('input[type="button"]');

  button.addEventListener("click", function () {
    if (select.selectedIndex !== -1) {
      select.remove(select.selectedIndex); // ✅ remove the selected option
    }
  });
};
