"use strict";

const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// setTimeout(openModal, 3000);

// Show modal once per user using cookies
var is_modal_show = sessionStorage.getItem("alreadyShow");
if (is_modal_show != "alredy shown") {
  // Show modal after 3 seconds
  setTimeout(openModal, 3000);
  sessionStorage.setItem("alreadyShow", "alredy shown");
}

// Closing modal function
const closeModal = function () {
  // Adding hidden class to parent div (.modal)
  closeModalBtn.parentNode.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Closing modals on click
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Key press escape to close modal
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// END

// Copying text to clipboard function
function copyTextFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function showToolTip() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
// END
