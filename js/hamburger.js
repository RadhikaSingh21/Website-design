function closeBanner() {
  document.querySelector(".sale-banner").style.display = "none";
}

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

function toggleDropdown(event) {
  event.preventDefault();
  const dropdownContent = event.target.nextElementSibling;
  dropdownContent.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => {
    if (
      !dropdown.contains(event.target) &&
      !dropdown.previousElementSibling.contains(event.target)
    ) {
      dropdown.classList.remove("active");
    }
  });
});
